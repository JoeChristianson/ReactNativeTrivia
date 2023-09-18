import { useState } from "react"
import CurrentQuestionEdit from "../components/CurrentQuestionEdit"
import Question from "../components/CurrentQuestionEdit/Question"
import ReviewScreen from "../components/ReviewScreen"

const CreateQuiz = ()=>{

    
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
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    // {
    //     query:"",
    //     correctAnswer:"",
    //     option1:"",
    //     option2:"",
    //     option3:""
    // },
    {
        query:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    }]

    const [questions,setQuestions] = useState(initialState)
    const [questionIndex,setQuestionIndex] = useState(0)
    const [reviewing,setReviewing] = useState(false)
    
    if(reviewing){
        return<ReviewScreen
        questions={questions}
        ></ReviewScreen>
    }

    return<div>Create Quiz
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