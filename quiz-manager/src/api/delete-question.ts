import { fexDelete } from "../utils/fex"


const deleteQuestion = async ({_id}:{_id:string})=>{
    const res = await fexDelete(`api/question/${_id}`,{})
    console.log({res})
}

export default deleteQuestion