import {styled} from "styled-components";
import {Comment} from "../../interfaces/Comment.ts";

interface CommentItemProps extends Comment {}

const CommentItem = ({content, user}: CommentItemProps) => {
    return (
        <CommentItemStyled>
            <img
                src="/assets/images/default-profil.jpg"
                alt=""
            />
            <div className="comment-content">
                <p className="pseudo">{user?.pseudo}</p>
                <p className="content">{content}</p>
            </div>
        </CommentItemStyled>
    );
};

export default CommentItem;

const CommentItemStyled = styled.div`
    display: flex;
    gap: 0.5rem;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    
    .comment-content{
        background-color: #3A3B3C;
        padding: 0.5rem 0.7rem;
        border-radius: 15px;
        
        .pseudo {
            font-size: 13px;
        }
        .content{
            font-size: 15px;
        }
    }
`;