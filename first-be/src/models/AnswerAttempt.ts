import mongoose from "mongoose";





const AnswerAttemptSchema = new mongoose.Schema({
    question:{
        type:mongoose.Types.ObjectId,
        ref:"Question",
        require:true
    },
    guess:{
        type:String,
        require:true
    },
    correctAnswer:{
        type:String,
        require:true
    },
    success:{
        type:Boolean,
        require:true
    }
})

const AnswerAttempt = mongoose.model("AnswerAttempt",AnswerAttemptSchema)

export default AnswerAttempt