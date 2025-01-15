import { ObjectId } from "mongoose"

export type TEnrollCourse={
    studentEmail:string,
    courseID:ObjectId,
    isEnrolled:'active'|'block',
    status:"comming"|"ongoing"|"completed",
    isDeleted:boolean
}


export type TLessoiPeogress= {
    lessonID:ObjectId,
    completed:string
}

export type TStudentProgress={
    studentID:ObjectId,
    progress:[TLessoiPeogress],
    totalProgress:number
}