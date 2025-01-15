import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { TRegister } from "./auth.interfatch"
import { authServices } from "./auth.service"
import { Request, Response } from "express"
import catchAsying from "../../utils/catchAsying";

const registrationUser =catchAsying( async (req: Request, res: Response) => {
    const user = req.body as TRegister;
    const result = await authServices.registrationUserFromDB(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: result
    });
});


const loginUser=catchAsying(async(req:Request,res:Response)=>{  
const user=req.body
const resualt=await authServices.loginUserFromDB(user)
sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'User login successfully',
    data:{
        accessToken:resualt.accessToken,
        refreshToken:resualt.refreshToken
    }
})
})


export const authController = {
    registrationUser,
    loginUser
}