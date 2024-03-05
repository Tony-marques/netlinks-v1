import {styled} from "styled-components";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {usePostContext} from "../../../../contexts/PostContext.tsx";
import {inputConfigs} from "./InputConfigs.tsx";

const CreatePostForm = () => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    });
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const {createPost} = usePostContext();

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        contentRef.current?.focus();
    }, []);

    const inputs = inputConfigs(handleOnChange, contentRef);

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
                {inputs?.map(({id, name, onChange, placeholder, ref}) => {
                    return (
                        <textarea
                            key={id}
                            name={name}
                            ref={ref}
                            placeholder={placeholder}
                            onChange={onChange}
                            rows={8}
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

        input, textarea {
            padding: 1rem;
            border: none;
            border-radius: 5px;
            outline: none;
            background-color: #3A3B3C;
            color: white;
        }

        textarea {
            resize: none;
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