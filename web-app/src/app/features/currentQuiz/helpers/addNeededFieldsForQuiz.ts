import { DetailedQuizState } from "../../../../pages/Quiz/helpers/getQuizState"
import { Quiz } from "../currentQuizSlice"

const addNeededFieldsForQuiz = ({quiz}:{quiz:Quiz})=>{
    const questions = quiz.questions.map(q=>{
        return {...q,confirmed:false}
    })
    return {...quiz,questions}
}

export default addNeededFieldsForQuiz