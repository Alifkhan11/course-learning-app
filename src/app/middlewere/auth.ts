import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsying";
import { User } from "../module/auth/auth.model";
import { TUserRole } from "../constains";
import Jwt, { JwtPayload } from 'jsonwebtoken'

const auth=(...requiredRoles:TUserRole[])=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization
        if(!token){
            throw new Error('You have not authrize')
        }

        const decoded=Jwt.verify(token,process.env.JWT_SECRET_ACCESS as string) as JwtPayload
        const {role,email,iat}=decoded

        if(requiredRoles && !requiredRoles.includes(role)){
            throw new Error('You are unauthorized Pleasr login and try again')
        }


        const user=await User.findOne({email})

        if(!user){
            throw new Error('User not found')
        }
        const isDeleted=user.isDeleted
        if(isDeleted){
            throw new Error('User is deleted')
        }

        req.user=decoded
        next()

})  }

export default auth