import {css, styled} from "styled-components";
import Modal from "../Modal/Modal.tsx";
import CreatePostForm from "../Posts/components/CreatePostForm/CreatePostForm.tsx";
import {useAuth} from "../../hooks/useAuth.tsx";
import {usePostContext} from "../../contexts/PostContext.tsx";

interface WhatsUpProps {
    $size?: string;
    $margin?: string;
}

const WhatsUp = ({$size, $margin}: WhatsUpProps) => {
    const {account} = useAuth();
    const {showModalCreatePost, handleShowModalCreatePost} = usePostContext();

    const handleOnClick = () => {
        handleShowModalCreatePost(true);
    };

    const toggleModal = (toggle: boolean) => {
        handleShowModalCreatePost(toggle);
    };
    return (
        <WhatsUpStyled $size={$size} $margin={$margin}>
                <img
                    src={"/public/assets/images/default-profil.jpg"}
                    alt=""
                />
                <span onClick={handleOnClick}>Quoi de neuf ? {account.pseudo}</span>
                {showModalCreatePost && <Modal
                    toggleModal={toggleModal}
                    showModal={showModalCreatePost}
                    title="Créer un post"
                >
                    <CreatePostForm/>
                </Modal>}
        </WhatsUpStyled>
    );
};

export default WhatsUp;

const WhatsUpStyled = styled.div<WhatsUpProps>`
        margin-top: 1rem;
        padding: 1rem;
        width: 600px;
        background-color: #242526;
        border-radius: 5px;
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;


        img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
        }

        span {
            flex: 1;
            background-color: #3A3B3C;
            padding: 0.5rem;
            border-radius: 30px;
            color: #B0B3B8;
            cursor: pointer;
        }

    ${({$size}) => $size && size[$size]}
    ${({$margin}) => $margin && margin[$margin]}
`;

const fullSize = css`
    width: 100%;
`

const size = {
    full: fullSize
}

const marginNone = css`
    margin: 0;
`

const margin = {
    none: marginNone
}