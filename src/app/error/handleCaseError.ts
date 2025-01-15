import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";

const handelCastError=(err:mongoose.Error.CastError) =>{
    const errorSource:TErrorSources=[
        {
            path:err.path,
            message:err.message
        }
    ]
    const statusCode=400

    return {
        statusCode,
        message:"Invalid ID",
        errorSource
    }
}


export default handelCastError