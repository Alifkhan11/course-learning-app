import {  ObjectId, Types } from "mongoose";

export type TCourse = {
    title: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    code: string;
    status: 'active' | 'block';
    isDeleted: boolean;
}
export type TCourseUpdath = {
    title?: string;
    description?: string;
    price?: number;
    rating?: number;
    image?: string;
    code?: string;
    status?: 'active' | 'block';
    isDeleted?: boolean;
    views?: number;
    likes?: number;
}

export type TFeedback = {
    email: string;
    message: string;
    courseID: Types.ObjectId;
    isDeleted: boolean;
    replay?:[TFeedbackReplay]
}

export type TFeedbackReplay={
    teacherID:ObjectId,
    message:string
}