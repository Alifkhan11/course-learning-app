import { z } from "zod";

export const registrationValidationSchema=z.object({
    body:z.object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters" }),
        role: z.enum(['student', 'teacher'], { message: "Role must be either 'student' or 'teacher'" }),
        isDeleted: z.boolean().default(false),
    })
})

export const authValidation={
    registrationValidationSchema
}