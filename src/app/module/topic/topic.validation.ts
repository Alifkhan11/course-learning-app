import { z } from "zod";


const questionValidationSchema=z.object({
    question:z.string(),
    answer:z.string(),
    option1:z.string(),
    option2:z.string(),
    option3:z.string(),
    option4:z.string().optional()
})




const createTopicValidationSchema=z.object({
    body:z.object({
        title:z.string(),
        lessonID:z.string(),
        discription:z.string().min(5),
        isDeleted:z.boolean().default(false),
        question:z.array(questionValidationSchema)
    })
})

export const TopicValidation={
    createTopicValidationSchema
}