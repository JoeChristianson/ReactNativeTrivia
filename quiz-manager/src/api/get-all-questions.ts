import { fexGet } from "../utils/fex"

const getAllQuestions = async ()=>{
    
    const res = await fexGet("api/all-questions")
    console.log({res})
}

export default getAllQuestions