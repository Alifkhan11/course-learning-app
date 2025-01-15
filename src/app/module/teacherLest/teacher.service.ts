import { User } from "../auth/auth.model";
import { Courses } from "../course/course.models";
import { TFollowersStudent, TTeacherLest } from "./teacher.interface";
import { Teacher } from "./teacher.model";

const createTeacherLestFromDB=async(data:TTeacherLest)=>{
    const teacher=await User.findById(data.teacherID)
    if(!teacher){
        throw new Error('Teacher is not found')
    }
    if(teacher.role!=='teacher'){
        throw new Error('Thsi user is not a teacher')
    }
    if(teacher.isDeleted){
        throw new Error('Teacher is deleted')
    }


    const course=await Courses.findById(data.courseID)
    if(!course){
        throw new Error('This course is not found')
    }
    if(course.isDeleted){
        throw new Error('This course is deleted')
    }


    const resualt=await Teacher.create(data)
    return resualt
}

const studentLikeTeacherToDB=async(id:string,data:TFollowersStudent)=>{

    const student=await User.findById(data.studentID)
    if(!student){
        throw new Error('Student not found')
    }
    if(student.role!=='student'){
        throw new Error('You are not a student ')
    }
    if(student.isDeleted){
        throw new Error('Student is Deleted')
    }

    const resualt =await Teacher.findByIdAndUpdate(id,{
        $push:{
            flowersStudent:data
        }
    },{upsert:true,new:true})
    return resualt
}

export const TeacherLestServices={
    createTeacherLestFromDB,
    studentLikeTeacherToDB
}