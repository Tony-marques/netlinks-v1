import {styled} from "styled-components";
import {createPortal} from "react-dom";
import {ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState} from "react";
import {modalConfigs} from "./ModalConfigs.tsx";
import {useFetchPost} from "../../../../hooks/useFetchPost.tsx";

interface ModalProps {
    toggleModal: (toggle: boolean) => void;
    showModal: boolean;
}

const Modal = ({toggleModal, showModal}: ModalProps) => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    });
    const {mutatePost} = useFetchPost(toggleModal);
    const titleRef = useRef<HTMLInputElement>(null);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [showModal]);

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutatePost(form);
    };

    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    const handleCloseModal = () => {
        toggleModal(false);
    };

    const inputs = modalConfigs(handleOnChange, titleRef);

    return createPortal(
        <ModalStyled onClick={handleCloseModal}>
            <div
                className="modal"
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >

                <div className="header">
                    <span className="title">Créer un post</span>
                    <i
                        className="fa-solid fa-xmark"
                        onClick={handleCloseModal}
                    ></i>
                </div>
                <div className="body">
                    <form
                        onSubmit={handleOnSubmit}
                        action=""
                        method="POST"
                    >
                        {inputs?.map(({id, type, name, onChange, placeholder, ref}) => {
                            return (
                                <input
                                    key={id}
                                    type={type}
                                    name={name}
                                    ref={ref}
                                    placeholder={placeholder}
                                    onChange={onChange}
                                />
                            );
                        })}
                        <button>Publier</button>
                    </form>
                </div>

                <div className="separator"></div>

            </div>

        </ModalStyled>
        , document.body);
};

export default Modal;

const ModalStyled = styled.div`
    background-color: #18191ACF;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        border-radius: 5px;
        color: white;
        //padding: 0 1rem;
        background-color: #242526;
        width: 600px;

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);

            .title {
                display: flex;
                justify-content: center;
                flex: 1;
                font-weight: 700;
                padding-left: 1rem;
            }

            .fa-xmark {
                cursor: pointer;
                padding-right: 1rem;
            }

            .separator {

            }
        }

        .body {
            padding: 1rem;

            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                input {
                    padding: 1rem;
                    border: none;
                    border-radius: 5px;
                    outline: none;
                    background-color: #3A3B3C;
                    color: white;
                }

                button {
                    padding: 0.7rem 1rem;
                    background-color: #0866FF;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    color: white;
                    font-weight: 700;
                }
            }
        }
    }
`;