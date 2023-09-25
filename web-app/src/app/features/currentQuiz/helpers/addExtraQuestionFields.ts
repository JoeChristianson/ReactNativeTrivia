import { Quiz } from "../currentQuizSlice"

const addExtraQuestionFields = ({quiz}:{quiz:Quiz})=>{
    const questions = quiz.questions.map(q=>{
        return {...q,reviewed:false}
    })
    return {...quiz,questions}
}

export default addExtraQuestionFields