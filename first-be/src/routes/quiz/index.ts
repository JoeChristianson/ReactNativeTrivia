import express, { Response,Request } from 'express';
import Question from "../../models/Question"
import DailyQuiz from "../../models/DailyQuiz"
import getDatesWithoutQuiz from "./helpers/getDatesWithoutQuiz"

const quizRoutes = express.Router()

quizRoutes.get("/:date",async (req:Request,res:Response)=>{
    try{
        const date = req.params.date
        console.log({date})
        const fixedDate = new Date(date)
        const quiz = await DailyQuiz.findOne({date:fixedDate}).populate("questions")
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
            const newQuestion = await Question.create(question)
            newQuestions.push(newQuestion)
        }
        const quiz = await DailyQuiz.create({date,questions:newQuestions})

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