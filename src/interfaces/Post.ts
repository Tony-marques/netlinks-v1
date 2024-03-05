export interface IPost {
    id: number;
    content: string;
    user: {
        id: number;
        pseudo: string;
        email: string;
        roles: [];
        image: undefined
    };
}