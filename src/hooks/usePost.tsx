import {useEffect, useState} from "react";
import {IPost} from "../interfaces/Post.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UserAPI} from "../services/api/Post.ts";

export const usePost = () => {
    const [filteredPosts, setFilteredPosts] = useState<IPost[] | undefined>([]);
    const [search, setSearch] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const queryClient = useQueryClient();

    const {data: posts} = useQuery({
        queryKey: ["posts"],
        queryFn: UserAPI.getPosts
    });

    const {mutate: mutatePost} = useMutation({
        mutationKey: ["posts"],
        mutationFn: UserAPI.createPost,
        onSuccess: () => {
            setShowModal?.(false);
            queryClient.invalidateQueries({queryKey: ["posts"]});
        }
    });

    useEffect(() => {
        const filteredPosts = posts?.filter((post: IPost) => {
            return post.title.includes(search);
        });
        setFilteredPosts(filteredPosts);
    }, [search, posts]);

    const handleUpdateSearch = (value: string) => {
        setSearch(value);
    };

    const handleShowModal = (bool: boolean) => {
        setShowModal(bool);
    };

    return {
        handleUpdateSearch,
        filteredPosts,
        showModal,
        handleShowModal,
        mutatePost
    };
};