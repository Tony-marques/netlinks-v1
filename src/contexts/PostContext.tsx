import {createContext, useContext, useMemo} from "react";
import {IPost} from "../interfaces/Post.ts";
import {usePost} from "../hooks/usePost.tsx";
import {Outlet} from "react-router-dom";

interface IPostContext {
    filteredPosts: IPost[] | undefined;
    handleUpdateSearch: (value: string) => void;
    showModalCreatePost: boolean;
    handleShowModalCreatePost: (bool: boolean) => void;
    createPost: (form: { title: string, content: string }) => void;
    deletePost: (id:number) => void;
    showModalDeletePost: boolean;
    handleShowModalDeletePost: (bool: boolean) => void;
    postsPerUser: IPost[] | undefined
}

const PostContext = createContext<IPostContext | null>(null);

export const PostContextProvider = () => {

    const {
        handleUpdateSearch,
        filteredPosts,
        showModalCreatePost,
        handleShowModalCreatePost,
        createPost,
        deletePost,
        showModalDeletePost,
        handleShowModalDeletePost,
        postsPerUser
    } = usePost();

    const contextValues = useMemo(() => ({
        handleUpdateSearch,
        filteredPosts,
        showModalCreatePost,
        handleShowModalCreatePost,
        createPost,
        deletePost,
        showModalDeletePost,
        handleShowModalDeletePost,
        postsPerUser
    }), [filteredPosts, showModalCreatePost, showModalDeletePost, postsPerUser]);

    return <PostContext.Provider value={contextValues}>
        <Outlet/>
    </PostContext.Provider>;
};

export const usePostContext = () => {
    const context = useContext(PostContext);

    if(!context) {
        throw new Error("error usePostContext");
    }

    return context;
};