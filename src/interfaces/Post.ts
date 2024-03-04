export interface IPost {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        pseudo: string;
        email: string;
        roles: [];
        image: undefined
    };
}