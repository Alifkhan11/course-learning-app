import { z } from "zod";



 const lessionValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, { message: "title is required" }),
        courseID: z.string(),
        discription: z.string().min(5),
        isDeleted: z.boolean().default(false),
        status: z.enum(["active", "block"]).default("active"),
    })
});


 const studentEngagementValidationSchema = z.object({
    body: z.object({
        studentEmail: z.string().email(),
        lessonID: z.string(),
        isCompleted: z.boolean().default(false),
        isDeleted: z.boolean().default(false),
    })
});


 const studentFollowCourseValidationSchema = z.object({
    body: z.object({
        studentEmail: z.string().email({ message: "invalid email address" }),
        lessonID: z.string(),
        isFlowed: z.boolean().default(false),
        isDeleted: z.boolean().default(false),
    })
});


export const lessionvalivation = {
    lessionValidationSchema,
    studentEngagementValidationSchema,
    studentFollowCourseValidationSchema
}