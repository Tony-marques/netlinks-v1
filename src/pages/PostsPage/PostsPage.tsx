import {styled} from "styled-components";
import Posts from "../../components/Posts/Posts.tsx";

const PostsPage = () => {

    return (
        <PostsPageStyled>
            <Posts/>
        </PostsPageStyled>
    );
};

export default PostsPage;

const PostsPageStyled = styled.div`
    
`;