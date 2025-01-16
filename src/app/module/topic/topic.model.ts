import { model, Schema } from "mongoose";
import { TQuistion, TTopic } from "./topic.interfatch";


const QuestionSchema=new Schema<TQuistion>({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
    }
})

const CreateTopicSchema=new Schema<TTopic>({
    title:{
        type:String,
        required:true,
    },
    lessonID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    discription:{
        type:String,
        required:true,
    }
    ,
    isDeleted:{
        type:Boolean,
        default:false,
    },
    question:[QuestionSchema]
    
})


export const Topic=model<TTopic>('Topic',CreateTopicSchema)