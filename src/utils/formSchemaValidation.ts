import {z} from "zod";

export type FormfieldscreatePost = z.infer<typeof createPostSchema>
export const createPostSchema = z.object({
    "content": z.string().min(3, "Il faut au minimum 3 caractères")
});

