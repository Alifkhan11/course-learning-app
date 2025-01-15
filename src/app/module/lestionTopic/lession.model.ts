import { model, Schema } from "mongoose";



const QuestionSchema = new Schema({
    question: { 
        type: String, 
        required: true
     },
    answer: {
        type: String,
        required: true
     },
});

const TopicSchema = new Schema({
    title: { 
        type: String, 
        required: true
     },
    description: { 
        type: String, 
        required: true
     },
    isDeleted: { 
        type: Boolean, 
        default: false
     },
    questions: [QuestionSchema]
});



const lessionTopicSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    courseID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        enum:['active','block'],
        default:'active'
    },
    topics:[TopicSchema]
})


export const Lession=model('Lession',lessionTopicSchema)


const TStudentEngagementSchema = new Schema({
    studentEmail: {
        type: String,
        required: true
    },
    lessonID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export const StudentEngagement = model('StudentEngagement', TStudentEngagementSchema)



const TStudentFollowCourseSchema = new Schema({
    studentEmail: {
        type: String,
        required: true
    },
    lessonID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isFlowed: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})
//every student can follow the course and everyday updathis status
export const StudentFollowCourse = model('StudentFollowCourse', TStudentFollowCourseSchema)