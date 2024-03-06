export interface Comment {
    id?: number;
    content?: string;
    createdAt?: Date;
    user?: {
        createdAt: Date;
        email: string;
        id: number;
        pseudo: string;
        role: string[]
    };
    post?: {
        id: number;
        content: string;
        createdAt: Date;
    };
}