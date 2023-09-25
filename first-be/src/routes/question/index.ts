import express, { Response,Request } from 'express';
import Question from '../../models/Question';


const questionRoutes = express.Router()


questionRoutes.post("/",async (req:Request,res:Response)=>{
    try{
        const body = req.body
        const variables = {...body,assigned:false}
        const question = await Question.create(variables)
        res.status(200).json({success:true,question})
    }catch(err){
        console.log({err})
        res.status(500).json({success:false})
    }
})

questionRoutes.post("/bulk-add",async(req:Request,res:Response)=>{
    try{
        const {questions} = req.body
        for (let question of questions){
            const params = {...question,assigned:false}
            await Question.create(params)
        }
        res.status(200).json({success:true})
    }catch(err){
        res.status(500).json({success:false})
    }
})

questionRoutes.get("/unassigned",async (req:Request,res:Response)=>{
    try{
        const questions = await Question.find({assigned:false})
        res.status(200).json({success:true,questions})
    }catch(err){
        console.log({err})
        res.status(500).json({success:false})
    }
})

questionRoutes.get("/assigned",async (req:Request,res:Response)=>{
    try{
        const questions = await Question.find({assigned:true})
        res.status(200).json({success:true,questions})
    }catch(err){
        console.log({err})
        res.status(500).json({success:false})
    }
})

questionRoutes.delete("/:id",async (req:Request,res:Response)=>{
    try{
        const id = req.params.id
        await Question.findByIdAndDelete(id)
        res.status(200).json({success:true})
    }catch(err){
        res.status(500).json({success:false})
    }
})

export default questionRoutes