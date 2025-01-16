import AppError from "../../error/AppError";
import QueryBilder, { QueryParameter } from "../../middlewere/queryFn";
import { Lession } from "../lestion/lession.model";
import { TTopic } from "./topic.interfatch";
import { Topic } from "./topic.model";
import httpStatus from "http-status";

const createTopicFromDB = async (data: TTopic) => {

    const lesson = await Lession.findById(data.lessonID)
    if (!lesson) {
        throw new AppError(httpStatus.OK, 'This Lession is not found')
    }
    if (lesson.status !== 'active') {
        throw new AppError(httpStatus.OK, 'This Lession is Block')
    }
    if (lesson.isDeleted) {
        throw new AppError(httpStatus.OK, 'This Lession is deleted')
    }


    const resualt = await Topic.create(data)
    return resualt
}


const getAllToicToDB=async(query:QueryParameter)=>{
    const resualt =await QueryBilder(Topic,query)
    return resualt
}

const getTopicByLessonToDB=async(lessonID:string)=>{
    const resualt = await Topic.find({lessonID})
    return resualt
}

export const TopicServices = {
    createTopicFromDB,
    getAllToicToDB,
    getTopicByLessonToDB
}