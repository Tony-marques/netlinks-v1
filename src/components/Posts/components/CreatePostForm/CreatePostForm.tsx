import {styled} from "styled-components";
import {useEffect} from "react";
import {usePostContext} from "../../../../contexts/PostContext.tsx";
import {inputConfigs} from "./InputConfigs.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createPostSchema, FormfieldscreatePost} from "../../../../utils/formSchemaValidation.ts";

const CreatePostForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}, setFocus} = useForm<FormfieldscreatePost>({
        resolver: zodResolver(createPostSchema),
        mode: "onChange"
    });
    const {createPost} = usePostContext();

    useEffect((): void => {
        setFocus("content")
    }, []);

    const inputs = inputConfigs(register);

    const handleOnSubmit = (data: {content: string}): void => {
        createPost(data);
    };

    return (
        <CreatePostFormStyled>
            <form
                onSubmit={handleSubmit(handleOnSubmit)}
                action=""
                method="POST"
            >
                {inputs?.map(({id, placeholder, register}) => {
                    return (
                        <textarea
                            key={id}
                            placeholder={placeholder}
                            rows={8}
                            {...register}
                        />
                    );
                })}
                {errors.content && <p className="errors">{errors.content.message}</p>}
                <button disabled={!isValid}>{!isValid ? "Renseigner le formulaire" : "Publier"}</button>
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

        .errors {
            color: red;
            font-size: 0.8rem;
        }

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

            &:disabled {
                background-color: gray;
                cursor: not-allowed;
            }
        }
    }
`;