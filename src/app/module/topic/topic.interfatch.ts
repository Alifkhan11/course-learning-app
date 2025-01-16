import { ObjectId } from "mongoose"

export type TQuistion={
    question:string,
    answer:string,
    option1:string,
    option2:string,
    option3:string,
    option4?:string,
}

export type TTopic={
    title:string,
    lessonID:ObjectId,
    discription:string,
    isDeleted:boolean,
    question:TQuistion[]
}