import { z } from "zod"


export const signUpSchema = z.object({
    email: z.string().email().refine(async (email) => {
        const res = await fetch(process.env.EXPO_PUBLIC_BACKEND_URL + "/api/accounts/check_email/?email=" + email)
        const jsonData = await res.json()
        const { exists } = jsonData
        return exists !== true
    }, { message: "Email already exists" }),
    username: z.string().min(5, { message: "username should be at least 5 characters" }).max(100).refine(async (data) => {
        const res = await fetch(process.env.EXPO_PUBLIC_BACKEND_URL + "/api/accounts/check_username/?username=" + data)
        const jsonData = await res.json()
        const { exists } = jsonData
        return exists !== true
    }, { message: "Username already exists" }),
    password: z.string().min(8).max(100),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    phone_number: z.string().min(9).max(20),
    gender:z.string(),
    type:z.string(),
    specialization:z.string().optional()
})

export type signUpSchemaType = z.infer<typeof signUpSchema>