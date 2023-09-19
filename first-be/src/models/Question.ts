import mongoose, { mongo } from "mongoose";



const QuestionSchema = new mongoose.Schema({
    query:{
        type:String,
        require:true
    },
    correctAnswer:{
        type:String,
        require:true
    },
    otherOptions:[{
        type:String,
        require:true
    }],
    assigned:{
        type:Boolean,
        required:true
    },
    submitterName:{
        type:String,
        required:false
    },
    youtubeProfile:{
        type:String,
        required:false
    },
    xProfile:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        required:false
    }
    
})

const Question = mongoose.model("Question",QuestionSchema)

export default Question