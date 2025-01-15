import { model, Schema } from "mongoose";
import { TFeedback, TFeedbackReplay } from "./course.interfatch";

const CourseSchema =new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true,
        unique: true
    },
    status:{
        type: String,
        enum:['active','block'],
        default: 'active'
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    views:{
        type: Number,
        default: 0
    },
    likes:{
        type: Number,
        default: 0
    }

})

export const Courses = model('Courses', CourseSchema);


const FeedbackReplaySchema=new Schema<TFeedbackReplay>({
    teacherID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const FeedbackSchema = new Schema<TFeedback>({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    courseID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    replay:{
        type:FeedbackReplaySchema,
        required:false
    }
});

export const Feedback = model('Feedback', FeedbackSchema);