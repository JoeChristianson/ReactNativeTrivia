import { useEffect } from "react"
import { DetailedQuizState } from "../../pages/Quiz/helpers/getQuizState"
import "./index.scss"
import saveQuizResults from "../../utils/saveQuizResults"
import BigNavButton from "../BigNavButton"

type Props = {
    detailedQuizState:DetailedQuizState
    date:Date
}

const QuizAttemptResults = ({detailedQuizState,date}:Props)=>{

    

    const correctCount = detailedQuizState.filter(q=>
      q.status==="correct"  
        ).length
        const passed = correctCount>5

        useEffect(()=>{
            saveQuizResults({date,correctAnswers:correctCount,passed})
        },[])

    return<main className="quiz-attempt-results">
        <h1>You're done!!!</h1>
        <div>
            <h1>{correctCount}/10</h1>
        </div>
        <BigNavButton dest="/">Back to Menu</BigNavButton>
    </main>
}


export default QuizAttemptResults