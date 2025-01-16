import { User } from "../auth/auth.model";
import { Courses } from "../course/course.models";
import { Lession, StudentEngagement, StudentFollowCourse } from "./lession.model";
import { TLesson, TStudentEngagement, TStudentFollowCourse } from "./lesson.intercace";

const createLessitionFromDB=async (data: TLesson) => {
    const exisitLesson=await Lession.findOne({title:data.title})
    if(exisitLesson){
        throw new Error('Lesson already exists')
    }
    const exisitcourse=await Courses.findById(data.courseID)
    if(!exisitcourse){
        throw new Error('Course not found')
    }
    const result=await Lession.create(data)
    return result
}

const updathLessionFromDB=async (data: TLesson,id:string) => {
    console.log(id);
    
 const exisitLesson=await Lession.findById(id)
    if(!exisitLesson){
        throw new Error('Lesson not found ss')
    }
    const isDeleted=exisitLesson.isDeleted
    if(isDeleted){
        throw new Error('Lesson is deleted')
    }

    const resualt=await Lession.findByIdAndUpdate(id,data,{upsert:true,new:true})
    return resualt
}

const deletedLessionFromDB=async (id:string) => {
    const exisitLesson=await Lession.findById(id)
    if(!exisitLesson){
        throw new Error('Lesson not found')
    }
    const isDeleted=exisitLesson.isDeleted
    if(isDeleted){
        throw new Error('Lesson alrady is deleted')
    }
    const resualt=await Lession.findByIdAndUpdate(id,{isDeleted:true},{new:true})
    return resualt
}

const studentEngagement=async (data:TStudentEngagement) => {
    const exisitLesson=await Lession.findById(data.lessonID)
    if(!exisitLesson){
        throw new Error('Lesson not found')
    }
    const isDeleted=exisitLesson.isDeleted
    if(isDeleted){
        throw new Error('Lesson is deleted')
    }
    const student=await User.findOne({email:data.studentEmail})

    
    if(!student){
        throw new Error('Student not found')
    }
    const studentDeleted=student.isDeleted
    if(studentDeleted){
        throw new Error('Student is deleted')
    }

    const engagement=await StudentEngagement.findOne({studentEmail:data.studentEmail,lessonID:data.lessonID})
    if(engagement){
        throw new Error('Student already engaged')
    }

    data.isCompleted=true
    const resualt=await StudentEngagement.create(data)
    return resualt
}

//The course will be monitored every 12 hours.

const studentFollowCourse=async (data:TStudentFollowCourse) => {
    const exisitLesson=await Lession.findById(data.lessonID)
    if(!exisitLesson){
        throw new Error('Lesson not found')
    }
    const isDeleted=exisitLesson.isDeleted
    if(isDeleted){
        throw new Error('Lesson is deleted')
    }
    const student=await User.findOne({email:data.studentEmail})

    
    if(!student){
        throw new Error('Student not found')
    }
    const studentDeleted=student.isDeleted
    if(studentDeleted){
        throw new Error('Student is deleted')

    }

    const followcourse=await StudentFollowCourse.findOne({studentEmail:data.studentEmail,lessonID:data.lessonID})
    if(followcourse){
        const resualt =await StudentFollowCourse.findByIdAndUpdate(followcourse._id,{isFlowed:true},{new:true})
        return resualt
    }else{

        data.isFlowed=true
        const resualt=await StudentFollowCourse.create(data)
        return resualt
    }
    


}

const autoflowCourse=async ()=> {
    const resualt=await StudentFollowCourse.updateMany({},{$set:{isFlowed:false}})
    return resualt
}

setInterval(autoflowCourse, 12*60*60*1000);


const getLessonToDB=async()=>{
    const resualt=await Lession.find()
    return resualt
}
//only course usder the lesson
const getLessonByCoursesToDB=async(courseID:string)=>{
    const resualt=await Lession.find({courseID})
    return resualt
}

export const lessionServices={
    createLessitionFromDB,
    updathLessionFromDB,
    deletedLessionFromDB,
    studentEngagement,
    studentFollowCourse,
    getLessonToDB,
    getLessonByCoursesToDB
}