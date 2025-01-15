import { ZodError, ZodIssue } from "zod";

const handleZodError=(err:ZodError)=>{
    const errorSources=err.issues.map((issue:ZodIssue)=>{
        return{
            path:issue?.path[issue.path.length-1],
            message:issue.message
        }
    })
    const statusCode=400
    return{
        statusCode,
        message:'Validation Error',
        errorSources
    }
}

export default handleZodError