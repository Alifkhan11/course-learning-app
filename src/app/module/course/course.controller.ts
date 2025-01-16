import catchAsync from "../../utils/catchAsying";
import sendResponse from "../../utils/sendResponse";
import { courseServices } from "./course.service";
import httpStatus from "http-status";

const createCourse = catchAsync(async (req, res) => {
    const resualt = await courseServices.createCourseFromDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course created successfully',
        data: resualt
    })
})

const updateCourse = catchAsync(async (req, res) => {
    const id = req.params.id
    const data = req.body
    const resualt = await courseServices.updathCourseFromDB(id, data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course updated successfully',
        data: resualt
    })
})

const deleteCourse = catchAsync(async (req, res) => {
    const id = req.params.id
    const resualt = await courseServices.deleteCourseFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course deleted successfully',
        data: resualt
    })
}
)


const incrementViews = catchAsync(async (req, res) => {
    const id = req.params.id
    const resualt =await courseServices.incrementViews(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course views incremented successfully',
        data: resualt
    })
})

const incrementLikes = catchAsync(async (req, res) => {
    const id = req.params.id
    const resualt =await courseServices.incrementLikes(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course likes incremented successfully',
        data: resualt
    })
})

const createFeedback = catchAsync(async (req, res) => {
     const resualt= await courseServices.createFeedbackFromDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Feedback created successfully',
        data: resualt
    })
})

const getAllCourses=catchAsync(async(req,res)=>{
    const query=req.query
    const resualt=await courseServices.getAllCoursesToDB(query)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'All courses fetched successfully',
        data:resualt
    })
})

const getSingleCourses=catchAsync(async(req,res)=>{
    const id=req.params.id
    const resualt=await courseServices.getSingleCourseToDB(id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Single courses fetched successfully',
        data:resualt
    })
})

const createFeedbackReplay=catchAsync(async(req,res)=>{
    const id=req.params.id as string
    const replay=req.body
    const resualt=await courseServices.createFeedbackReplayFromDB(replay,id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Feedback Replay created successfully',
        data:resualt
    })
})


export const courseController = {
    createCourse,
    updateCourse,
    deleteCourse,
    incrementViews,
    incrementLikes,
    createFeedback,
    getAllCourses, 
    getSingleCourses,
    createFeedbackReplay
}