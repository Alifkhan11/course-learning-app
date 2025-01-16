import catchAsync from "../../utils/catchAsying";
import sendResponse from "../../utils/sendResponse";
import { TopicServices } from "./topic.service";
import httpStatus from 'http-status'

const createTopic=catchAsync(async(req,res)=>{
    const resualt=await TopicServices.createTopicFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Topic Created SuccessFully',
        data:resualt
    })
})

const getAllTopic=catchAsync(async(req,res)=>{
    const resualt = await TopicServices.getAllToicToDB(req.query)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'All Topic Retrive Successfully',
        data:resualt
    })
})


const getTopicByLesson=catchAsync(async(req,res)=>{
    const resualt =await TopicServices.getTopicByLessonToDB(req.params.id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Lesson wise Topic Retrive successfully',
        data:resualt
    })
})

export const TopicController={
    createTopic,
    getAllTopic,
    getTopicByLesson
}