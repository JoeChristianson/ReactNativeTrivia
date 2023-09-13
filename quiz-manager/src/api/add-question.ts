import { fexPost } from "../utils/fex"

type Args = {
    question:string
    correctAnswer:string
    otherOptions:string[]
}

const addQuestion = async ({question,correctAnswer,otherOptions}:Args)=>{
    const res = await fexPost("api/add-question",{query:question,correctAnswer,otherOptions})
    console.log(res)
}

export default addQuestion