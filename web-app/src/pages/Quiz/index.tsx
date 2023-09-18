import { useSelector } from "react-redux"
import "./index.scss"
import { AppDispatch, RootState, store } from "../../app/store"
import currentQuizSlice, { getQuiz } from "../../app/features/currentQuiz/currentQuizSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import CurrentQuestion from "../../components/CurrentQuestion"
import Question from "../../types/Question"
import getQuizState from "./helpers/getQuizState"
import QuizProgressBar from "../../components/QuizProgressBar"
import QuizAttemptResults from "../../components/QuizAttemptResults"

const Quiz = ()=>{

    const dispatch:AppDispatch = useDispatch()
    const quizState = useSelector((state:any)=>state.currentQuiz)

    // const da

    useEffect(()=>{
        const data = {
            day:17,
            month:8,
            year:2023,
            userId:'soinoionsdfsdf'
        }
        dispatch(getQuiz(data))
    },[])

    const questions = quizState?.quiz?.questions||[]

    const unansweredQuestions = questions.filter((q:Question)=>!q?.playerAnswer)

    const detailedQuizState = getQuizState({questions})

    console.log({detailedQuizState})

    const currentQuestion = unansweredQuestions[0]

    if(!questions||questions.length===0){
        return<></>
    }




    return<main className="quiz-main">
        <header>
            <QuizProgressBar
            detailedQuizState={detailedQuizState}
            ></QuizProgressBar>
        </header>
    
    {currentQuestion&&<CurrentQuestion
    question={currentQuestion}
    ></CurrentQuestion>}
    {!currentQuestion&&<QuizAttemptResults
    detailedQuizState={detailedQuizState}
    ></QuizAttemptResults>}
    
    
    </main>
}

export default Quiz