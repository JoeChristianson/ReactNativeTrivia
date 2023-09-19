import mongoose from "mongoose";
import getTrimmedDate from "../utils/date/getTrimmedDate";

const DailyQuizSchema = new mongoose.Schema({
    date:{
        type:String,
        unique:true,
        required:true
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    }]
})

const DailyQuiz = mongoose.model("DailyQuiz",DailyQuizSchema)

export default DailyQuiz