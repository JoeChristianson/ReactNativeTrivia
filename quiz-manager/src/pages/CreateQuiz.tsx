import { useEffect, useState } from "react"
import CurrentQuestionEdit from "../components/CurrentQuestionEdit"
import Question from "../components/CurrentQuestionEdit/Question"
import ReviewScreen from "../components/ReviewScreen"
import {useDebounce} from "use-debounce"
import saveQuizIntoLocalStorage from "../utils/saveQuizInLocalStorage"
import getQuizFromLocalStorage from "../utils/getQuizFromLocalStorage"
const CreateQuiz = ()=>{

    const savedQuiz = getQuizFromLocalStorage()
    
    const initialState:Question[] = [{
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },{
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    }]

    const [questions,setQuestions] = useState(savedQuiz||initialState)
    const [questionIndex,setQuestionIndex] = useState(0)
    const [reviewing,setReviewing] = useState(false)
    const [delayedQuizState] = useDebounce(questions,1000)

    useEffect(()=>{
        saveQuizIntoLocalStorage({quiz:questions})
    },[delayedQuizState])


    if(reviewing){
        return<ReviewScreen
        questions={questions}
        ></ReviewScreen>
    }

    return<div>
        <CurrentQuestionEdit
        questions={questions}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        setQuestions={setQuestions}
        setReviewing={setReviewing}
        ></CurrentQuestionEdit>        

    </div>
}

export default CreateQuiz