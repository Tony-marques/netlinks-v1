import {styled} from "styled-components";
import {useQuery} from "@tanstack/react-query";
import CommentItem from "../CommentItem/CommentItem.tsx";
import {Comment} from "../../interfaces/Comment.ts";

interface CommentListProps {
    postId: number;
}

const CommentList = ({postId}: CommentListProps) => {

    const {data: comments} = useQuery({
        queryKey: ["comments", postId],
        queryFn: async () => {
            try {
                const response = await fetch(`https://localhost:8000/comment/${postId}`, {
                    credentials: "include"
                });
                const data = await response.json();

                if(!response.ok) {
                    localStorage.removeItem("user");
                }
                return data;
            } catch(e) {
                return [];
            }

        }
    });

    console.log(comments);
    return (
        <CommentListStyled>
            {comments?.map(({id, content, user}: Comment) => (
                <CommentItem
                    key={id}
                    content={content}
                    user={user}
                />
            ))}
        </CommentListStyled>
    );
};

export default CommentList;

const CommentListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;