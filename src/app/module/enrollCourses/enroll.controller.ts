import catchAsync from "../../utils/catchAsying";
import sendResponse from "../../utils/sendResponse";
import { enrollServices } from "./enroll.service";
import  httpStatus  from "http-status";

const createEnrollCourses=catchAsync(async(req,res)=>{
    const resualt=await enrollServices.createEnrollCouresFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Enroll courses created successfully',
        data:resualt
    })
})

const createStudentProgres=catchAsync(async(req,res)=>{
    const resualt=await enrollServices.createStudentProgresFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Student Progress Created Successfully',
        data:resualt
    })
})

export const enrollCourseController={
    createEnrollCourses,
    createStudentProgres
}