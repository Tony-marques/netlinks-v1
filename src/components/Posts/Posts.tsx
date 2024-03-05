import {styled} from "styled-components";
import Post from "../Post/Post.tsx";
import {IPost} from "../../interfaces/Post.ts";
import {usePostContext} from "../../contexts/PostContext.tsx";

const Posts = () => {

    const {filteredPosts} = usePostContext();

    return (
        <PostsStyled>
            {filteredPosts?.map(({id, content, user}: IPost) => {
                return (
                    <Post
                        key={id}
                        id={id}
                        content={content}
                        user={user}
                        $size="600"
                    />
                );
            })}
        </PostsStyled>
    );
};

export default Posts;

const PostsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;