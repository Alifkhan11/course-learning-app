import catchAsync from "../../utils/catchAsying";
import sendResponse from "../../utils/sendResponse";
import { TeacherLestServices } from "./teacher.service";
import  httpStatus  from "http-status";

const createTeacherLest=catchAsync(async(req,res)=>{
    const resualt=await TeacherLestServices.createTeacherLestFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Teacher Lest Created Successfullly',
        data:resualt
    })
})

const studentLikeTeacher=catchAsync(async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const resualt=await TeacherLestServices.studentLikeTeacherToDB(id,data)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Teacher flower student create successfully',
        data:resualt
    })
})


export const TeacherLestController={
    createTeacherLest,
    studentLikeTeacher
}