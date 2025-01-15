import { model, Schema } from "mongoose";
import { TRegister } from "./auth.interfatch";

const registrationSchema = new Schema<TRegister>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true,
        enum:['student','teacher']
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

export const User = model('User',registrationSchema)