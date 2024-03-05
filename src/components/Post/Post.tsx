import {css, styled} from "styled-components";
import {useAuth} from "../../hooks/useAuth.tsx";
import {useState} from "react";
import Modal from "../Modal/Modal.tsx";
import ConfirmDeletePost from "../Posts/components/ConfirmDeletePost/ConfirmDeletePost.tsx";

interface PostProps extends PostStyled {
    title: string;
    id: number;
    user: {
        id: number;
        pseudo: string;
        email: string;
        roles: [];
        image: undefined
    };
}

interface PostStyled {
    $size: 'full' | "600";
}

const Post = ({title, user, id, $size = "full"}: PostProps) => {
    const {account} = useAuth();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleToggleModal = (bool: boolean) => {
        setShowDeleteModal(bool);
    };

    return (
        <PostStyled $size={$size}>
            <div className="user-informations">
                <div className="profil-picture">
                    <img
                        src={"/public/assets/images/default-profil.jpg"}
                        alt=""
                    />
                </div>
                <p>{user.pseudo}</p>
                {(account.id === user.id || account.roles.includes("ROLE_ADMIN")) &&
                    <i
                        className="fa-solid fa-xmark"
                        onClick={() => handleToggleModal(true)}
                    ></i>
                }
                {showDeleteModal && <Modal
                    toggleModal={handleToggleModal}
                    showModal={showDeleteModal}
                    title={"Etes-vous sur de vouloir supprimer ce post ?"}
                >
                    <ConfirmDeletePost
                        id={id}
                        handleToggleModal={handleToggleModal}
                    />
                </Modal>}
            </div>
            <p>{title}</p>
        </PostStyled>
    );
};

export default Post;

const PostStyled = styled.div<PostStyled>`
    padding: 1rem;
    width: 600px;
    background-color: #242526;
    color: #E0E1E6;
    border-radius: 5px;

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

    ${({$size}) => $size && size[$size]}
    
`;

const sizeFull = css`
    width: 100%;
`

const size600 = css`
    width: 600px
`

const size = {
    full: sizeFull,
    [600]: size600
}
