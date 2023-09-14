import express, { Response,Request } from 'express';
import getRandomQuestion from '../utils/getRandomQuestion';


const apiRouter = express.Router();

// apiRouter a specific note
apiRouter.get('/random-question', (req, res) => {
    console.log("sending question")
    const question = getRandomQuestion()
    console.log({question})
    res.json({question});
});

apiRouter.post("/add-question",(req:Request,res:Response)=>{
    try{
        const body = req.body
        const {question,answer,otherOptions} = body
        

        res.status(200).json({success:true})
    }catch(err){
        res.status(500).json({success:false})
    }
})

apiRouter.post("/register",async (req:Request,res:Response)=>{
    try{
        const payload = {
            email:"jcfargond@gmail.com",
            userId:"ipnsdfj9j99n9sdfd",
            jwt:"sinoinsdfjjowefwef"
        }
        

        res.status(200).json(payload)

        
    }catch(err:any){
        res.status(500).json({success:false,error:err.message})
    }
})

export default apiRouter;
