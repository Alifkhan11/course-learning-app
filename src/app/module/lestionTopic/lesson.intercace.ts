import { ObjectId } from "mongoose"

export type TLesson={
    title:string,
    courseID:ObjectId,
    discription:string,
    isDeleted:boolean
    status:'active'|'block'
    topics?:TTopics[]
}

export type TQuestions = {
    question: string,
    answer: string,
    isCorrect: boolean
}

export type TTopics={
    title:string,
    lessonID:ObjectId,
    discription:string,
    isDeleted:boolean
    questions?:TQuestions[]
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