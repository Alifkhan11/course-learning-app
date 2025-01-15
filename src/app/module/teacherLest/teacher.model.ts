import { model, Schema } from "mongoose";
import { TFollowersStudent, TTeacherLest } from "./teacher.interface";

const FlowersStudentShcema=new Schema<TFollowersStudent>({
    studentID:{
        type:Schema.Types.ObjectId,
        required:true
    }
})

const TeacherLestSchema=new Schema<TTeacherLest>({
    teacherID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    courseID:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    status:{
        type:String,
        enum:['ongoing','retired'],
        default:'ongoing'
    },
    isDeleted:{
        type:Boolean,
        default:false,
    },
    flowersStudent:{
        type:FlowersStudentShcema,
        required:false
    }
    
})

export const Teacher=model<TTeacherLest>('Teacher',TeacherLestSchema)