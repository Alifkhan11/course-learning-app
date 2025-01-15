import { ObjectId } from "mongoose"


export type TFollowersStudent={
    studentID:ObjectId
}

export type TTeacherLest={
    teacherID:ObjectId,
    courseID:ObjectId,
    status:'ongoing'|'retired'
    isDeleted:boolean
    flowersStudent?:[TFollowersStudent]
}