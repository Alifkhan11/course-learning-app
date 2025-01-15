import QueryBilder, { QueryParameter } from "../../middlewere/queryFn"
import { User } from "../auth/auth.model"
import { TCourse, TCourseUpdath, TFeedback, TFeedbackReplay } from "./course.interfatch"
import { Courses, Feedback } from "./course.models"

const createCourseFromDB=async (course:TCourse)=>{

    const courseExist=await Courses.findOne({code:course.code})
    if(courseExist){
        throw new Error('Course Code already exists ')
    }
    const courseName=courseExist ? (courseExist as TCourse).title:null
    if(courseName===course.title){
        throw new Error('Course Title already exists')
    }


    const result = await Courses.create(course)
    return result
}

const updathCourseFromDB=async (id:string,data:TCourseUpdath)=>{
    const course=await Courses.findById(id)
    if(!course){
        throw new Error('Course not found')
    }
    const isDeleted=(course as TCourse).isDeleted
    if(isDeleted){
        throw new Error('Course is deleted')
    }

    const result=await Courses.findByIdAndUpdate(id,data,{new:true})
    return result
}

const deleteCourseFromDB=async (id:string)=>{
    const course=await Courses.findById(id)
    if(!course){
        throw new Error('Course not found')
    }
    const isDeleted=(course as TCourse).isDeleted
    if(isDeleted){
        throw new Error('Course is alrady deleted')
    }
    const resualt=await Courses.findByIdAndUpdate(id,{isDeleted:true},{new:true})
    return resualt
}

const incrementViews=async (id:string)=>{
    const course=await Courses.findById(id)
    if(!course){
        throw new Error('Course not found')
    }
    const isDeleted=(course as TCourse).isDeleted
    if(isDeleted){
        throw new Error('Course is deleted')
    }
    course.views=course.views+1
    await course.save()
    return course
}

const incrementLikes=async (id:string)=>{
    const course=await Courses.findById(id)
    if(!course){
        throw new Error('Course not found')
    }
    const isDeleted=(course as TCourse).isDeleted
    if(isDeleted){
        throw new Error('Course is deleted')
    }
    course.likes=course.likes+1
    await course.save()
    return course
}

const createFeedbackFromDB=async (data:TFeedback)=>{

    
    const course=await Courses.findById(data.courseID)
    
    if(!course){
        throw new Error('Course not found')
    }
    const isDeleted=(course as TCourse).isDeleted
    if(isDeleted){
        throw new Error('Course is deleted')
    }
    console.log(data);
    const student=await User.findOne({email:data.email})
    if(!student){
        throw new Error('Student not found')
    }
    const isDeletedStudent=student.isDeleted
    if(isDeletedStudent){
        throw new Error('Student is deleted')
    }

    const resualt =await Feedback.create(data)
    return resualt

}

const getAllCoursesToDB=async (query:QueryParameter)=>{
    const result=await QueryBilder(Courses,query)
    return result
}

const getSingleCourseToDB=async (id:string)=>{
    const result=await Courses.findById(id)
    return result
}

const createFeedbackReplayFromDB=async(replay:TFeedbackReplay,id:string)=>{
    const teacher=await User.findById(replay.teacherID)
    if(!teacher){
        throw new Error('Teacher not found')
    }

    if(teacher.role!=='teacher'){
        throw new Error('This user is not a teacher')
    }
    const resualt=await Feedback.findByIdAndUpdate(id,{replay},{upsert:true,new:true})
    return resualt

}

export const courseServices={
    createCourseFromDB,
    updathCourseFromDB,
    deleteCourseFromDB,
    incrementViews,
    incrementLikes,
    createFeedbackFromDB,
    getAllCoursesToDB,
    getSingleCourseToDB,
    createFeedbackReplayFromDB
}