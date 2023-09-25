import { fexGet } from "../utils/fex"

const getUnassignedQuestions = async ()=>{
    const res = await fexGet("api/question/unassigned")
    return res
}

export default getUnassignedQuestions