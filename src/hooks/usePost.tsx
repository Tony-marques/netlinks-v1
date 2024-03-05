import {useEffect, useState} from "react";
import {IPost} from "../interfaces/Post.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UserAPI} from "../services/api/Post.ts";
import {  toast } from 'react-toastify';
import {useAuth} from "./useAuth.tsx";


export const usePost = () => {
    const {account} = useAuth()
    const [filteredPosts, setFilteredPosts] = useState<IPost[] | undefined>([]);
    const [search, setSearch] = useState<string>("");
    const [showModalCreatePost, setShowModalCreatePost] = useState<boolean>(false);
    const [showModalDeletePost, setShowModalDeletePost] = useState<boolean>(false);
    const queryClient = useQueryClient();

    const {data: posts} = useQuery({
        queryKey: ["posts"],
        queryFn: UserAPI.getPosts
    });

    const {data: postsPerUser}  = useQuery({
        queryKey: ["posts"],
        queryFn: () => UserAPI.getPostsPerUser(account.id)
    })

    const {mutate: createPost} = useMutation({
        mutationKey: ["posts"],
        mutationFn: UserAPI.createPost,
        onSuccess: () => {
            setShowModalCreatePost?.(false);
            queryClient.invalidateQueries({queryKey: ["posts"]});
        }
    });

    const {mutate: deletePost} = useMutation({
        mutationKey: ["posts"],
        mutationFn: async (id: number) => {
            const response = await fetch(`https://localhost:8000/posts/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            return await response.json();
        },

        onSettled: (data) => {
            console.log(data);
            queryClient.invalidateQueries({queryKey: ["posts"]});
            toast.success("Le post a été supprimé avec succès !")
        }
    });

    useEffect(() => {
        const filteredPosts = posts?.filter((post: IPost) => {
            return post.content.includes(search);
        });
        setFilteredPosts(filteredPosts);
    }, [search, posts]);

    const handleUpdateSearch = (value: string) => {
        setSearch(value);
    };

    const handleShowModalCreatePost = (bool: boolean) => {
        setShowModalCreatePost(bool);
    };
    const handleShowModalDeletePost = (bool: boolean) => {
        setShowModalDeletePost(bool);
        // console.log(showModalDeletePost);
    };

    return {
        handleUpdateSearch,
        filteredPosts,
        showModalCreatePost,
        handleShowModalCreatePost,
        createPost,
        deletePost,
        showModalDeletePost,
        handleShowModalDeletePost,
        postsPerUser
    };
};