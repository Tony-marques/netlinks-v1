import {styled} from "styled-components";
import {useAuth} from "../../hooks/useAuth.tsx";
import SidebarBlock from "./components/SidebarBlock/SidebarBlock.tsx";
import Post from "../../components/Post/Post.tsx";
import {usePostContext} from "../../contexts/PostContext.tsx";

const ProfilePage = () => {
    const {account} = useAuth();
    const {postsPerUser} = usePostContext();

    return (
        <ProfilePageStyled>
            <div className="header">
                <div className="cover-container">

                    <div className="cover-picture">
                        <img
                            src="/assets/images/default-profil.jpg"
                            alt=""
                        />
                    </div>
                    <div className="user-informations">
                        <img
                            src="/assets/images/default-profil.jpg"
                            alt=""
                        />
                        <span>{account.pseudo.split(" ").map((item: string) => item.substring(0, 1).toUpperCase() + item.substring(1))}</span>
                    </div>
                    dddddddddddddddddddddd
                </div>
            </div>
            <div className="body">
                <div className="sidebar">
                    <SidebarBlock title="Intro">
                        test
                    </SidebarBlock>
                    <SidebarBlock title="Photos">
                        test2
                    </SidebarBlock>
                </div>
                <div className="posts">
                    {postsPerUser?.map(({id, title, user}) => {
                        return (
                            <Post
                                key={id}
                                title={title}
                                id={id}
                                user={user}
                                $size="full"
                            />
                        );
                    })}
                </div>
            </div>

        </ProfilePageStyled>
    );
};

export default ProfilePage;

const ProfilePageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        //background-color: red;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: center;
        background-color: #242526;

        .cover-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1250px;
            //border: 4px solid blue;

            .cover-picture {
                width: 100%;
                //background-color: green;

                img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    //border: 3px solid yellow;
                }
            }

            .user-informations {
                width: 1150px;
                display: flex;
                gap: 1rem;
                //margin-top: -85px;

                img {
                    width: 170px;
                    height: 170px;
                    border-radius: 50%;
                    border: 4px solid #242526;
                    margin-top: -85px;

                }

                span {
                    display: flex;
                    //border: 1px solid red;
                    align-items: center;
                    color: #eee;
                    font-weight: 500;
                    font-size: 2rem;
                }
            }
        }
    }

    .body {
        display: flex;
        margin-top: 1rem;
        //background-color: red;
        width: 1150px;
        gap: 1rem;

        .sidebar {
            //background-color: yellow;
            flex: 1.5;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .posts {
            //background-color: green;
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`;