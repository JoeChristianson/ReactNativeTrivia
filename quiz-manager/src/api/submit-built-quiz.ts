import { fexPost } from "../utils/fex"



const submitBuiltQuiz = async ({questionIds}:{questionIds:string[]})=>{
    const res = await fexPost("api/quiz/submit-build",{questionIds})
    return res
}

export default submitBuiltQuiz