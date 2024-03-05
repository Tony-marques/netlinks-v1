import {styled} from "styled-components";
import Posts from "../../components/Posts/Posts.tsx";
import WhatsUp from "../../components/WhatsUp/WhatsUp.tsx";

const PostsPage = () => {

    return (
        <PostsPageStyled>
            <WhatsUp/>
            <Posts/>
        </PostsPageStyled>
    );
};

export default PostsPage;

const PostsPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;