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

const Quiz = ({date}:{date:{day:number,year:number,month:number}})=>{

    const dispatch:AppDispatch = useDispatch()
    const quizState = useSelector((state:any)=>state.currentQuiz)

    // const da

    useEffect(()=>{
        const data = {
            ...date,
            userId:'soinoionsdfsdf'
        }
        dispatch(getQuiz(data))
    },[])

    const questions = quizState?.quiz?.questions||[]

    const unansweredQuestions = questions.filter((q:Question)=>!q?.reviewed)

    const detailedQuizState = getQuizState({questions})

    const currentQuestion = unansweredQuestions[0]

    if(!questions||questions.length===0){
        return<QU
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
    date={new Date(`${date.month+1}-${date.day}-${date.year}`)}
    detailedQuizState={detailedQuizState}
    ></QuizAttemptResults>}
    
    
    </main>
}

export default Quiz