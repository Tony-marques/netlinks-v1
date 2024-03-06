import {styled} from "styled-components";
import {FaRegComment} from "react-icons/fa";
import CreateCommentForm
    from "../CreateCommentForm/CreateCommentForm.tsx";
import {useState} from "react";
import CommentList from "../CommentList/CommentList.tsx";

interface CommentsProps {
    postId: number;
}

const Comments = ({postId}: CommentsProps) => {
    const [showForm, setShowForm] = useState(false);
    const handleOnClick = () => {
        toggleForm()
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <CommentsStyled>
            <div
                className="comment-button"
                onClick={handleOnClick}
            >
                <span>Commenter</span>
                <FaRegComment/>
            </div>
            <div className="separator"></div>
            {showForm && <>
                <CreateCommentForm postId={postId} toggleForm={toggleForm}/>
                <div className="separator"></div>
            </>
            }
            <CommentList postId={postId}/>
        </CommentsStyled>
    );
};

export default Comments;

const CommentsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //border: 1px solid blue;

    .comment-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 33%;
        gap: 0.5rem;
        //border: 1px solid red;
        color: #B0B3B8;
        transition: background-color 0.3s;
        cursor: pointer;
        padding: 0.3rem 0;
        border-radius: 5px;

        &:hover {
            background-color: #3A3B3C;
        }
    }

    .separator {
        border-bottom: 1px solid #3E4042;
        margin: 0.5rem 0;
    }
`;