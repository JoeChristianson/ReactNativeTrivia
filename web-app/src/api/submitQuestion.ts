import { fexPost } from "../utils/fex"

type Args = {
    query:string
    correctAnswer:string
    otherOptions:string[]
    submitterName:string
    youtubeProfile:string
    xProfile:string
}

const submitQuestion = async (variables:Args)=>{
    const res = await fexPost("api/question",variables)
    console.log({res})
}

export default submitQuestion