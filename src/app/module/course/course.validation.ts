import { z } from "zod";

export const courseValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, { message: "Title is required" }),
        description: z.string().min(1, { message: "Description is required" }),
        price: z.number().min(0, { message: "Price must be a positive number" }),
        rating: z.number().min(0, { message: "Rating must be a positive number" }),
        image: z.string().min(1, { message: "Image URL is required" }),
        code: z.string().min(1, { message: "Code is required" }),
        status: z.enum(["active", "block"], { message: "Status must be 'active' or 'block'" }),
        isDeleted: z.boolean().default(false),
        views: z.number().default(0),
        likes: z.number().default(0),
    })
});


export const feedbackReplayValidationSchema = z.object({
    teacherID: z.string().min(1, { message: "Teacher ID is required" }),
    message: z.string().min(1, { message: "Message is required" }),
});

export const feedbackValidationSchema = z.object({
    body: z.object({
        email: z.string().email({ message: "Invalid email address" }),
        message: z.string().min(1, { message: "Message is required" }),
        courseID: z.string().min(1, { message: "Course ID is required" }),
        isDeleted: z.boolean().default(false),
        replay: feedbackReplayValidationSchema.optional(),
    })
});


export const courseValidation={
    courseValidationSchema,
    feedbackValidationSchema
}