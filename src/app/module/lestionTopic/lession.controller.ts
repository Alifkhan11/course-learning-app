import catchAsying from "../../utils/catchAsying";
import { Request, Response } from 'express';
import { lessionServices } from "./lestion.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createLessitionTopic=catchAsying(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.createLessitionTopicFromDB(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and topic created successfully',
        data:result
    })
})

const updathLessionTopic=catchAsying(async(req:Request,res:Response)=>{
    const id=req.params.id
    const data=req.body
    const result=await lessionServices.updathLessionTopicFromDB(data,id)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and topic updated successfully',
        data:result
    })
})

const deletedLessionTopic=catchAsying(async(req:Request,res:Response)=>{
    const id=req.params.id
    const result=await lessionServices.deletedLessionTopicFromDB(id)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and topic deleted successfully',
        data:result
    })
})

const studentEngagement=catchAsying(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.studentEngagement(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Student engagement created successfully',
        data:result
    })
})

const studentFollowCourse=catchAsying(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.studentFollowCourse(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Student follow course created successfully',
        data:result
    })
})

const getLesson=catchAsying(async(req,res)=>{
    const resualt=await lessionServices.getLessonToDB()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Lession Retrive Successfully',
        data:resualt
    })
})


export const lessionController={
    createLessitionTopic ,
    updathLessionTopic ,
    deletedLessionTopic,
    studentEngagement,
    studentFollowCourse,
    getLesson
}