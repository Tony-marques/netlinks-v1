import {IPost} from "../../interfaces/Post.ts";

export class UserAPI {
    static url: string = "https://localhost:8000/posts";

    static async getPosts(): Promise<IPost[]> {
        try {
            const response = await fetch(UserAPI.url, {
                credentials: "include"
            });
            const data = await response.json();
            if(!response.ok) {
                localStorage.removeItem("user");
            }
            return data;
        } catch(err) {
            console.log(err);
            return []
        }
    }

    static async createPost(formData: { title: string, content: string }) {
        const response = await fetch(UserAPI.url, {
            method: "POST",
            body: JSON.stringify(formData),
            credentials: "include",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
}