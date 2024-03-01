import {styled} from "styled-components";
import Post from "./components/Post/Post.tsx";
import {useFetchPost} from "../../hooks/useFetchPost.tsx";
import {IPost} from "../../interfaces/Post.ts";

const Posts = () => {
    const {posts} = useFetchPost();

    return (
        <PostsStyled>
            {posts?.map(({id, title, user}: IPost) => {
                return (
                    <Post
                        key={id}
                        title={title}
                        user={user}
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