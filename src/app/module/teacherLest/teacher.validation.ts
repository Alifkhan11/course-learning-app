import { z } from "zod";

const flowersStudentValidationSchema=z.object({
    StudentID:z.string()
})

const teacherLestValidationSchema=z.object({
    body:z.object({
        teacherID:z.string(),
        courseID:z.string(),
        status:z.enum(['ongoing','retired']).default('ongoing'),
        idDeleted:z.boolean().default(false),
        flowersStudent:z.array(flowersStudentValidationSchema).optional()
    })
})



export const teacherValidation={
    teacherLestValidationSchema
}