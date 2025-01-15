import { model, Schema, } from "mongoose";
import { TEnrollCourse, TLessoiPeogress, TStudentProgress } from "./enroll.interface";

const EnrollCourseSchema=new Schema<TEnrollCourse>({
    studentEmail:{
        type:String,
        required:true
    },
    courseID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    isEnrolled:{
        type:String,
        enum:['active','block'],
        default:'active'
    },
    status:{
        type:String,
        enum:['comming','ongoing','completed'],
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

const LessonProgressSchema=new Schema<TLessoiPeogress>({
    lessonID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    completed:{
        type:String,
        required:true
    }
})



const StudentPregressSchema=new Schema<TStudentProgress>({
    studentID:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    progress:[LessonProgressSchema],
    totalProgress:{
        type:Number,
        required:true
    }
})

export const StudentPregress=model<TStudentProgress>('StudentProgress',StudentPregressSchema)

export const EnrollCourse=model<TEnrollCourse>('EnrollCourse',EnrollCourseSchema)

