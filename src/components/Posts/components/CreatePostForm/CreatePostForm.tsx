import {styled} from "styled-components";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {usePostContext} from "../../../../contexts/PostContext.tsx";
import {inputConfigs} from "./InputConfigs.tsx";

const CreatePostForm = () => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    });
    const titleRef = useRef<HTMLInputElement>(null);
    const {createPost} = usePostContext();

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    const inputs = inputConfigs(handleOnChange, titleRef);

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPost(form);
    };

    return (
        <CreatePostFormStyled>
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
        </CreatePostFormStyled>
    );
};

export default CreatePostForm;

const CreatePostFormStyled = styled.div`
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
`;