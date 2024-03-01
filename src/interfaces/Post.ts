export interface IPost {
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