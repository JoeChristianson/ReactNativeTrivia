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
    }]
})

const Question = mongoose.model("Question",QuestionSchema)

export default Question