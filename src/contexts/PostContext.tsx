import {createContext, ReactNode, useContext, useMemo} from "react";
import {IPost} from "../interfaces/Post.ts";
import {usePost} from "../hooks/usePost.tsx";

interface PostContextProviderProps {
    children: ReactNode;
}

interface IPostContext {
    filteredPosts: IPost[] | undefined;
    handleUpdateSearch: (value: string) => void;
    showModal: boolean;
    handleShowModal: (bool: boolean) => void;
    mutatePost: (form: { title: string, content: string }) => void;
}

const PostContext = createContext<IPostContext | null>(null);

export const PostContextProvider = ({children}: PostContextProviderProps) => {

    const {
        handleUpdateSearch,
        filteredPosts,
        showModal,
        handleShowModal,
        mutatePost
    } = usePost();

    const contextValues = useMemo(() => ({
        handleUpdateSearch,
        filteredPosts,
        showModal,
        handleShowModal,
        mutatePost
    }), [filteredPosts, showModal]);

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