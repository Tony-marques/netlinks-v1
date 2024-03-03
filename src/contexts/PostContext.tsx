import {createContext, ReactNode, useContext, useMemo} from "react";
import {IPost} from "../interfaces/Post.ts";
import {usePost} from "../hooks/usePost.tsx";

interface PostContextProviderProps {
    children: ReactNode;
}

interface IPostContext {
    filteredPosts: IPost[] | undefined;
    handleUpdateSearch: (value: string) => void;
    showModalCreatePost: boolean;
    handleShowModalCreatePost: (bool: boolean) => void;
    createPost: (form: { title: string, content: string }) => void;
    deletePost: (id:number) => void;
    showModalDeletePost: boolean;
    handleShowModalDeletePost: (bool: boolean) => void
}

const PostContext = createContext<IPostContext | null>(null);

export const PostContextProvider = ({children}: PostContextProviderProps) => {

    const {
        handleUpdateSearch,
        filteredPosts,
        showModalCreatePost,
        handleShowModalCreatePost,
        createPost,
        deletePost,
        showModalDeletePost,
        handleShowModalDeletePost
    } = usePost();

    const contextValues = useMemo(() => ({
        handleUpdateSearch,
        filteredPosts,
        showModalCreatePost,
        handleShowModalCreatePost,
        createPost,
        deletePost,
        showModalDeletePost,
        handleShowModalDeletePost
    }), [filteredPosts, showModalCreatePost, showModalDeletePost]);

    return <PostContext.Provider value={contextValues}>
        {children}
    </PostContext.Provider>;
};

export const usePostContext = () => {
    const context = useContext(PostContext);

    if(!context) {
        throw new Error("error usePostContext");
    }

    return context;
};