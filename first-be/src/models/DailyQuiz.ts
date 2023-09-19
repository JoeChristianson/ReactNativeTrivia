import mongoose from "mongoose";

const DailyQuizSchema = new mongoose.Schema({
    date:{
        type:Date,
        unique:true,
        required:true
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    }],
    trimmedDate:{
        type:String,
        unique:true,
    }
})

const DailyQuiz = mongoose.model("DailyQuiz",DailyQuizSchema)

export default DailyQuiz