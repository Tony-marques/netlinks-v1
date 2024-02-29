import {styled} from "styled-components";
import {useEffect, useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";

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

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[] | null>([]);
    const {account} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://localhost:8000/posts", {
                credentials: "include"
            });
            const data = await response.json();
            if(!response.ok) {
                localStorage.removeItem("user");
            }
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <PostsPageStyled>
            {posts?.map((post: IPost) => {
                return (
                    <div
                        key={post.id}
                        className="post"
                    >
                        <div className="user-informations">
                            <div className="profil-picture">
                                <img
                                    src={"/public/assets/images/default-profil.jpg"}
                                    alt=""
                                />
                            </div>
                            <p>{post.user.email}</p>
                            {(account.id === post.user.id || account.roles.includes("ROLE_ADMIN")) &&
                                <i className="fa-solid fa-xmark"></i>
                            }

                        </div>
                        <p>{post.title}</p>
                    </div>
                );
            })}
        </PostsPageStyled>
    );
};

export default PostsPage;

const PostsPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .post {
        padding: 1rem;
        width: 600px;
        background-color: #242526;
        color: #E0E1E6;
        border-radius: 5px;

        .user-informations {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            .profil-picture {
                display: flex;
                align-items: center;

                img {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }

            .fa-xmark {
                margin-left: auto;
                font-size: 1.5rem;
                cursor: pointer;
            }
        }
    }
`;