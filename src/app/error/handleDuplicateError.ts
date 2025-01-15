import { TErrorSources, TGeneriteErrorResponse } from "../interface/error";

const handleDuplicateError=(err:any):TGeneriteErrorResponse=>{
    const match=err.message.match(/"([^"]*)"/)
    const extractedMessage=match && match[1]
    const errorSource:TErrorSources=[
        {
            path:'',
            message:`${extractedMessage} is alrady exisit`
        }
    ]

    const statusCode=400

    return{
        statusCode,
        message:err.errorResponse.errmsg,
        errorSource
    }
}
export default handleDuplicateError