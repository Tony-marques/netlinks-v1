import {styled} from "styled-components";
import Posts from "../../components/Posts/Posts.tsx";
import {useAuth} from "../../hooks/useAuth.tsx";
import {useState} from "react";
import Modal from "../../components/Posts/components/Modal/Modal.tsx";

const PostsPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {account} = useAuth();

    const handleOnClick = () => {
        setShowModal(true);
    };

    const toggleModal = (toggle: boolean) => {
        setShowModal(toggle);
    };

    return (
        <PostsPageStyled>
            <div className="whatsUp">
                <img
                    src={"/public/assets/images/default-profil.jpg"}
                    alt=""
                />
                <span onClick={handleOnClick}>Quoi de neuf ? {account.email}</span>
                {showModal && <Modal
                    toggleModal={toggleModal}
                    showModal={showModal}
                />}
            </div>
            <Posts/>
        </PostsPageStyled>
    );
};

export default PostsPage;

const PostsPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .whatsUp {
        padding: 1rem;
        width: 600px;
        background-color: #242526;
        //color: #E0E1E6;
        border-radius: 10px;
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;


        img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
        }

        span {
            flex: 1;
            background-color: #3A3B3C;
            padding: 0.5rem;
            border-radius: 30px;
            color: #B0B3B8;
            cursor: pointer;
        }
    }
`;