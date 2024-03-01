import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UserAPI} from "../services/api/Post.ts";
import {IPost} from "../interfaces/Post.ts";

export const useFetchPost = (toggleModal?: (toggle: boolean) => void) => {
    const queryClient = useQueryClient();

    const fetchPosts = () => UserAPI.getPosts();
    const createPost = () => UserAPI.createPost;

    const {data: posts} = useQuery<IPost[]>({
        queryKey: ["posts"],
        queryFn: () => fetchPosts()
    });

    const {mutate: mutatePost} = useMutation({
        mutationKey: ["posts"],
        mutationFn: createPost(),
        onSuccess: () => {
            console.log();
            toggleModal?.(false);
            queryClient.invalidateQueries({queryKey: ["posts"]});
        }
    });

    return {
        posts,
        mutatePost
    };
};