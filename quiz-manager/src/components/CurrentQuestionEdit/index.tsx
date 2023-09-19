import { useEffect, useState } from "react"
import Question from "./Question"
import InputAndLabel from "../InputAndLabel"
import { DynamicAnyObject } from "../../types/genericObjects"
import "./index.scss"
type Props = {
    questions:Question[]
    setQuestions:React.Dispatch<Question[]>
    questionIndex:number
    setQuestionIndex:React.Dispatch<number>
    setReviewing:React.Dispatch<boolean>
}

const CurrentQuestionEdit = ({questions,questionIndex,setQuestions,setQuestionIndex,setReviewing}:Props)=>{

    const question = questions[questionIndex]
    const [formState,setFormState] = useState<DynamicAnyObject>(question)

    useEffect(()=>{
        const question:Question = {...formState} as any
        const newQuestions = [...questions]
        newQuestions[questionIndex] = question
        setQuestions(newQuestions)
    },[formState])

    useEffect(()=>{
        setFormState(questions[questionIndex])
    },[questionIndex])

    const checkIfComplete = ()=>{
        for (let key in formState){
            if(formState[key]===""){
                return false
            }
        }
        return true
    }

    const isComplete = checkIfComplete()
    const canGoBack = questionIndex>0

    const handleNext = ()=>{
        if((questionIndex+1)>=questions.length){
            console.log("going to submit screen")
            setReviewing(true)
            return
        }
        setQuestionIndex(questionIndex+1)
    }

    const handleBack = ()=>{
        setQuestionIndex(questionIndex-1)
    }

    return<main className="current-question-edit-main">
        <h2>Question {questionIndex+1}</h2>
            <InputAndLabel
            formValues={formState}
            fieldName="query"
            setFormValues={setFormState}
            ></InputAndLabel>
            <InputAndLabel
            formValues={formState}
            fieldName="correctAnswer"
            setFormValues={setFormState}
            ></InputAndLabel>
            <InputAndLabel
            formValues={formState}
            fieldName="option1"
            setFormValues={setFormState}
            ></InputAndLabel>
            <InputAndLabel
            formValues={formState}
            fieldName="option2"
            setFormValues={setFormState}
            ></InputAndLabel>
            <InputAndLabel
            formValues={formState}
            fieldName="option3"
            setFormValues={setFormState}
            ></InputAndLabel>
            {canGoBack&&<button onClick={handleBack}>Back</button>}
            {isComplete&&<button onClick={handleNext}>Next</button>}
    </main>
}

export default CurrentQuestionEdit