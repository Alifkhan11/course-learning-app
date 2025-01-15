import { z } from "zod";

export const enrollCoursesValidationSchema = z.object({
    body: z.object({
        studentEmail: z.string().email({ message: "Invalid email address" }),
        courseID: z.string().min(1, { message: "Course ID is must me provided" }),
        isEnrolled: z.enum(["active", "block"]).default("active"),
        status: z.enum(["comming", "ongoing", "completed"], { message: "Invalid status" }),
        isDeleted: z.boolean().default(false),
    })
})

export const lessonProgresValidationSchema = z.object({
    lessonID: z.string().min(1, { message: "lessin id must be provaided" }),
    completed: z.string(),
});


export const studentProgresValidationSchema = z.object({
    body: z.object({
        studentID: z.string().min(1, { message: "provaided student id" }),
        progress: z.array(lessonProgresValidationSchema).min(1),
        totalProgress: z.number(),
    })
});


export const enrollValidation={
    enrollCoursesValidationSchema,
    studentProgresValidationSchema
}