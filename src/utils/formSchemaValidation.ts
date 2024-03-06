import {z} from "zod";

export type FormfieldscreatePost = z.infer<typeof createPostSchema>
export const createPostSchema = z.object({
    "content": z.string().min(3, "Il faut au minimum 3 caractères")
});

export type FormfieldRegister = z.infer<typeof registerSchema>
export const registerSchema = z.object({
    email: z.string().email("Merci de renseigner un email valide"),
    pseudo: z.string().regex(/^(?=.*[A-Za-z])[A-Za-z\d]{5,}$/, {
        message: "Le pseudo doit contenir au moins 5 caractères"
    }),
    password: z.string()
    //     .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    //         message: "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule et un chiffre."
    //     })
});

export type FormfieldLogin = z.infer<typeof loginSchema>
export const loginSchema = z.object({
    email: z.string().email("Merci de renseigner un email valide"),
    password: z.string()
    //     .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    //         message: "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule et un chiffre."
    //     })
});

