import {styled} from "styled-components";
import {useAuth} from "../../../../hooks/useAuth.tsx";
import {usePost} from "../../../../hooks/usePost.tsx";

interface PostProps {
    title: string;
    id: number;
    user: {
        id: number;
        email: string;
        roles: [];
        image: undefined
    };
}

const Post = ({title, user, id}: PostProps) => {
    const {account} = useAuth();
    const {deletePost} = usePost();

    return (
        <PostStyled>
            <div className="user-informations">
                <div className="profil-picture">
                    <img
                        src={"/public/assets/images/default-profil.jpg"}
                        alt=""
                    />
                </div>
                <p>{user.email}</p>
                {(account.id === user.id || account.roles.includes("ROLE_ADMIN")) &&
                    <i
                        className="fa-solid fa-xmark"
                        onClick={() => deletePost(id)}
                    ></i>
                }

            </div>
            <p>{title}</p>
        </PostStyled>
    );
};

export default Post;

const PostStyled = styled.div`
    padding: 1rem;
    width: 600px;
    background-color: #242526;
    color: #E0E1E6;
    border-radius: 10px;

    .user-informations {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        .profil-picture {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .fa-xmark {
            margin-left: auto;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
`;