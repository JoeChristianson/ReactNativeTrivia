import Question from "../types/Question";

const saveQuizIntoLocalStorage = ({quiz}:{quiz:Question[]})=>{
    localStorage.setItem("quiz-build",JSON.stringify(quiz))
}

export default saveQuizIntoLocalStorage