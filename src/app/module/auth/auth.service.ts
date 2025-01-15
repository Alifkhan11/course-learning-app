import  httpStatus  from "http-status"
import { TLogin, TRegister } from "./auth.interfatch"
import { User } from "./auth.model"
import bcrypt from 'bcrypt'
import { createToken } from "./auth.utils"
import AppError from "../../error/AppError"

const registrationUserFromDB = async (user: TRegister) => {
    const exixtingUser = await User.findOne({ email: user.email })
    if (exixtingUser) {
        throw new AppError(httpStatus.NOT_FOUND,'User already exists')
    }
    
    user.password=await bcrypt.hash(user.password, 10);

    const result = await User.create(user)
    return result
}

const loginUserFromDB = async (user: TLogin) => {
    const existingUser =await User.findOne({email:user.email})
    if(!existingUser){
        throw new Error('User not found')
    }
    const isPasswordMatch=await bcrypt.compare(user.password,existingUser.password) 
    if(!isPasswordMatch){
        throw new Error('Invalid password')
    }
    if(existingUser.isDeleted){
        throw new Error('User is deleted')
    }

    const jwtPayload={
        email:existingUser.email,
        role:existingUser.role
    }

    const accessToken=createToken(
        jwtPayload,
        process.env.JWT_SECRET_ACCESS as string,
        process.env.JWT_EXPIRES_IN_ACCESS as string
    )
    const refreshToken=createToken(
        jwtPayload,
        process.env.JWT_SECRET_REFRESH as string,
        process.env.JWT_EXPIRES_IN_REFRESH as string
    )

    return {accessToken,refreshToken}

}

export const authServices = {
    registrationUserFromDB,
    loginUserFromDB
}