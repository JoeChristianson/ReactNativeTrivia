import express, { Response,Request } from 'express';
import getRandomQuestion from '../utils/getRandomQuestion';
import Question from '../models/Question';
import { error } from 'console';
import User from '../models/User';


import quizRoutes from "./quiz/index"
import questionRoutes from './question';

const apiRouter = express.Router();

apiRouter.get("/all-questions", async (req,res)=>{
    try{
        console.log("hitting")
        const allQuestions = await Question.find()
        console.log({allQuestions})
        res.status(200).json({allQuestions,success:true})
    }catch(err:any){
        res.status(500).json({success:false,error:error})
    }
})

apiRouter.get('/random-question', async (req, res) => {
    console.log("hit route")
    const question = await getRandomQuestion()
    console.log({question})
    res.json({question});
});

apiRouter.post("/add-question", async (req:Request,res:Response)=>{
    try{
        const body = req.body
        const {query,correctAnswer,otherOptions} = body
        const question = new Question({query,correctAnswer,otherOptions})
        await question.save()
        res.status(200).json({success:true})
    }catch(err){
        res.status(500).json({success:false})
    }
})

apiRouter.post("/register",async (req:Request,res:Response)=>{
    try{
        console.log("hitting")
        const {username,email,password,confirmPassword} = req.body
        if(password!==confirmPassword){
            throw new Error("passwords do not match")
        }
        const user = await User.create({username,email,password})
        console.log({user})

        res.status(200).json({email,userId:"sdf",jwt:"oinsdfd"})

        
    }catch(err:any){
        res.status(500).json({success:false,error:err.message})
    }
})
apiRouter.post('/answer',async (req,res)=>{
    try{

        const body = req.body;
        console.log({body})
        res.status(200).json({success:true})
    }catch(err){
        res.status(500).json({success:true,error:err})
    }
})


apiRouter.use("/quiz",quizRoutes)
apiRouter.use("/question",questionRoutes)


export default apiRouter;
