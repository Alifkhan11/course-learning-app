import { ObjectId } from "mongoose"

export type TLesson={
    title:string,
    courseID:ObjectId,
    discription:string,
    isDeleted:boolean
    status:'active'|'block'
}


export type TStudentEngagement={
    studentEmail:string,
    lessonID:ObjectId,
    isCompleted:boolean,
    isDeleted:boolean
}

//every student can follow the course
export type TStudentFollowCourse={
    studentEmail:string,
    lessonID:ObjectId,
    isFlowed:boolean,
    isDeleted:boolean
}