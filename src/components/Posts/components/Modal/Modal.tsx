import {styled} from "styled-components";
import {createPortal} from "react-dom";
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface ModalProps {
    toggleModal: (toggle: boolean) => void;
}

const createPost = async (formData: { title: string, content: string }) => {
    const response = await fetch("https://localhost:8000/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
};

const Modal = ({toggleModal}: ModalProps) => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    });
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["posts"],
        mutationFn: createPost,
        onSuccess: (data) => {
            console.log(data);
            toggleModal(false);
            queryClient.invalidateQueries({queryKey: ['posts']})
        }
    });

    console.log(form);
    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("https://localhost:8000/posts", {
        //     method: "POST",
        //     body: JSON.stringify(form),
        //     credentials: "include",
        //     headers: {
        //         accept: "application/json",
        //         "Content-Type": "application/json"
        //     }
        // });
        // const data = await response.json();
        // if(response.ok) {
        //     console.log(data);
        //     toggleModal(false);
        // }
        mutate(form);
    };

    return createPortal(
        <ModalStyled>
            <div className="modal">

                <div className="header">
                    <span className="title">Créer un post</span>
                    <span className="close">X</span>
                </div>
                <div className="body">
                    <form
                        onSubmit={handleOnSubmit}
                        action=""
                        method="POST"
                    >
                        <input
                            type="text"
                            placeholder="titre"
                            name="title"
                            onChange={handleOnChange}
                        />
                        <input
                            type="text"
                            placeholder="contenu"
                            name="content"
                            onChange={handleOnChange}
                        />
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
            border-bottom: 1px solid red;

            .title {
                display: flex;
                justify-content: center;
                flex: 1;
                font-weight: 700;
                padding-left: 1rem;
            }

            .close {
                padding-right: 1rem;
            }

            .separator {

            }
        }
    }
`;