import Question from "../types/Question";
import { fexPost } from "../utils/fex";



const submitQuiz = async ({questions}:{questions:Question[]})=>{
    const fixedQuestions = questions.map(q=>{
        const obj = {query:q.query,correctAnswer:q.correctAnswer,otherOptions:[q.option1,q.option2,q.option3]}
        return obj
    })
    const res = await fexPost("api/quiz",{questions,fixedQuestions})
}

export default submitQuiz