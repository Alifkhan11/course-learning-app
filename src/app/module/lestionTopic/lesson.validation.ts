import { z } from "zod";

export const questionValidationSchema = z.object({
    question: z.string().min(1, { message: "question is required" }),
    answer: z.string().min(1, ),
});

export const topicValidationSchema = z.object({
    title: z.string().min(1, { message: "title is required" }),
    description: z.string().min(1, { message: "description is required" }),
    isDeleted: z.boolean().default(false),
    questions: z.array(questionValidationSchema).optional(),
});


export const lessionTopicValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, { message: "title is required" }),
        courseID: z.string(),
        discription: z.string().min(5),
        isDeleted: z.boolean().default(false),
        status: z.enum(["active", "block"]).default("active"),
        topics: z.array(topicValidationSchema),
    })
});


export const studentEngagementValidationSchema = z.object({
    body: z.object({
        studentEmail: z.string().email(),
        lessonID: z.string(),
        isCompleted: z.boolean().default(false),
        isDeleted: z.boolean().default(false),
    })
});


export const studentFollowCourseValidationSchema = z.object({
    body: z.object({
        studentEmail: z.string().email({ message: "invalid email address" }),
        lessonID: z.string(),
        isFlowed: z.boolean().default(false),
        isDeleted: z.boolean().default(false),
    })
});


export const lessionvalivation = {
    lessionTopicValidationSchema,
    studentEngagementValidationSchema,
    studentFollowCourseValidationSchema
}