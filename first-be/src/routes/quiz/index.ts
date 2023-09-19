import express, { Response,Request } from 'express';
import Question from "../../models/Question"
import DailyQuiz from "../../models/DailyQuiz"
import getDatesWithoutQuiz from "./helpers/getDatesWithoutQuiz"
import getTrimmedDate from '../../utils/date/getTrimmedDate';

const quizRoutes = express.Router()

quizRoutes.get("/",async (req:Request,res:Response)=>{
    try{
        const quizzes = await DailyQuiz.find()
        console.log({quizzes})
        res.status(200).json({quizzes})
    }catch(err){
        console.log({err})
        res.status(500).json({success:false})
    }
})


quizRoutes.get("/:date",async (req:Request,res:Response)=>{
    try{
        const dateString = req.params.date
        const trimmedDate = getTrimmedDate({dateString})
        console.log({trimmedDate})
        const allQuizzes = await DailyQuiz.find()
        allQuizzes.forEach((q)=>{
            const match = trimmedDate===q.trimmedDate
            console.log("trimmedDateOfOne:",q.trimmedDate,",match",match)
        })
        const quiz = await DailyQuiz.findOne({trimmedDate}).populate("questions")
        console.log({quiz})
        res.status(200).json({quiz})
    }catch(err){
        console.log({err})
        res.status(500).json({success:false})
    }
})

quizRoutes.post("/",async (req:Request,res:Response)=>{
    try{
        let {questions,date} = req.body
        const newQuestions:any[] = []
        if(questions.length!==10){
            throw new Error("Must have ten questions")
        }
        if(!date){
            date = (await getDatesWithoutQuiz())[0]
        }

        for (let question of questions){
            const newQuestion = await Question.create({...question,assigned:true})
            newQuestions.push(newQuestion)
        }
        const trimmedDate = getTrimmedDate({dateString:date})
        const quiz = await DailyQuiz.create({date,trimmedDate,questions:newQuestions})

        res.status(200).json({success:true,quiz})
    }catch(err:any){
        res.status(500).json({success:false,error:err.message})
    }
})


quizRoutes.get("/missingQuizzes",async (req:Request,res:Response)=>{
    try{
        const missingQuizzes = await getDatesWithoutQuiz()
        res.status(200).json({success:true,missingQuizzes})
    }catch(err:any){
        res.status(500).json({success:false,error:err.message})
    }
})


export default quizRoutes