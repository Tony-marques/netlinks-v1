import {styled} from "styled-components";
import {createPortal} from "react-dom";
import {MouseEvent, ReactNode, useEffect} from "react";

interface ModalProps {
    toggleModal: (toggle: boolean) => void;
    showModal: boolean;
    title: string;
    children: ReactNode;
}

const Modal = ({toggleModal, showModal, title, children}: ModalProps) => {

    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [showModal]);

    const handleCloseModal = () => {
        toggleModal(false);
    };

    return createPortal(
        <ModalStyled onClick={handleCloseModal}>
            <div
                className="modal"
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >

                <div className="header">
                    <span className="title">{title}</span>
                    <i
                        className="fa-solid fa-xmark"
                        onClick={handleCloseModal}
                    ></i>
                </div>
                <div className="body">
                    {children}
                </div>

                <div className="separator"></div>

            </div>

        </ModalStyled>
        , document.body);
};

export default Modal;

const ModalStyled = styled.div`
    background-color: #18191ACF;
    position: fixed;
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


        }


    }
`;