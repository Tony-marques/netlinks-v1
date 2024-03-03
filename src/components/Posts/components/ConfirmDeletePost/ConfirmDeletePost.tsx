import {styled} from "styled-components";
import {usePost} from "../../../../hooks/usePost.tsx";

interface ConfirmDeletePost {
    id: number;
    handleToggleModal: (bool: boolean) => void;
}

const ConfirmDeletePost = ({id, handleToggleModal}: ConfirmDeletePost) => {
    const {deletePost} = usePost();
    const handleConfirmDelete = () => {
        deletePost(id);
    };

    const handleCancelDelete = () => {
        handleToggleModal(false);
    };

    return (
        <ConfirmDeletePostStyled>
            <button onClick={handleConfirmDelete} className="confirm">Confirmer</button>
            <button onClick={handleCancelDelete} className="cancel">Annuler</button>
        </ConfirmDeletePostStyled>
    );
};

export default ConfirmDeletePost;

const ConfirmDeletePostStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0.5rem;

    button {
        padding: 0.7rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        font-weight: 700;
    }

    .confirm {
        background-color: #0866FF;
    }

    .cancel {
        background-color: #F70000;
    }
`;