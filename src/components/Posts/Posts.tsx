import {styled} from "styled-components";
import {useQuery} from "@tanstack/react-query";
import Post from "./components/Post/Post.tsx";

interface IPost {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        email: string;
        roles: [];
        image: undefined
    };
}

const fetchPosts = async (): Promise<IPost[]> => {
    const response = await fetch("https://localhost:8000/posts", {
        credentials: "include"
    });
    const data = await response.json();
    if(!response.ok) {
        localStorage.removeItem("user");
    }
    return data;
};
const Posts = () => {

    const {data: posts} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });
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
    align-items: center;
    gap: 1rem;


`;