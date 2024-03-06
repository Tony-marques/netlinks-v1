import {styled} from "styled-components";
import {LuSendHorizonal} from "react-icons/lu";
import {useForm} from "react-hook-form";
import {
    createCommentSchema,
    FormFieldCreateComment
} from "../../utils/formSchemaValidation.ts";
import {useEffect} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

interface CreateCommentFormProps {
    postId: number;
    toggleForm: () => void;
}

const CreateCommentForm = ({
    postId,
    toggleForm
}: CreateCommentFormProps) => {
    const {
        register,
        setFocus,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FormFieldCreateComment>({
        resolver: zodResolver(createCommentSchema)
    });
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationKey: ["comment", postId],
        mutationFn: async (data: { content: string }) => {
            const response = await fetch(`https://localhost:8000/comment/${postId}`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            return await response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["comments", postId]});
            toggleForm();
        }
    });

    const handleOnSubmit = (data: { content: string }) => {
        const {content} = data;
        mutate({content});
        console.log(content);
        reset();
    };

    useEffect(() => {
        setFocus("content");
    }, []);

    return (
        <CreateCommentFormStyled method="post">
            <div className="top-form">
                <img
                    src="/assets/images/default-profil.jpg"
                    alt=""
                />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Ecriver un commentaire ..."
                        {...register("content")}
                    />
                    <button onClick={handleSubmit(handleOnSubmit)}>
                        <LuSendHorizonal/>
                    </button>

                </div>
            </div>
            {errors.content &&
                <p className="errors">{errors.content.message}</p>}
        </CreateCommentFormStyled>
    );
};

export default CreateCommentForm;

const CreateCommentFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .top-form {
        display: flex;
        flex: 1;
        gap: 0.5rem;

        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        .input-group {
            flex: 1;
            gap: 0.3rem;
            display: flex;
            align-items: center;
            background-color: #3A3B3C;
            padding: 0 1rem;
            border-radius: 30px;

            input {
                height: 100%;
                flex: 1;
                background-color: inherit;
                border: none;
                outline: none;
                color: white;
            }

            button {
                background-color: inherit;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;


                svg {
                }
            }


        }
    }


    .errors {
        font-size: 0.8rem;
        color: red;
    }
`;