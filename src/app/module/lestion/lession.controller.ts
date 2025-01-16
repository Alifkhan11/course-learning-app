import catchAsync from "../../utils/catchAsying";
import { Request, Response } from 'express';
import { lessionServices } from "./lestion.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createLessition=catchAsync(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.createLessitionFromDB(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and  created successfully',
        data:result
    })
})

const updathLession=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const data=req.body
    const result=await lessionServices.updathLessionFromDB(data,id)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and  updated successfully',
        data:result
    })
})

const deletedLession=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const result=await lessionServices.deletedLessionFromDB(id)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Lession and  deleted successfully',
        data:result
    })
})

const studentEngagement=catchAsync(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.studentEngagement(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Student engagement created successfully',
        data:result
    })
})

const studentFollowCourse=catchAsync(async(req:Request,res:Response)=>{
    const data=req.body
    const result=await lessionServices.studentFollowCourse(data)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:'Student follow course created successfully',
        data:result
    })
})

const getLesson=catchAsync(async(req,res)=>{
    const resualt=await lessionServices.getLessonToDB()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Lession Retrive Successfully',
        data:resualt
    })
})


const getLessonByCourses=catchAsync(async(req,res)=>{
    const id=req.params.id
    console.log(id);
    
    const resualt=await lessionServices.getLessonByCoursesToDB(id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Only Course under the lession',
        data:resualt
    })
})


export const lessionController={
    createLessition ,
    updathLession ,
    deletedLession,
    studentEngagement,
    studentFollowCourse,
    getLesson,
    getLessonByCourses
}