import "./index.scss"

import { useEffect, useState } from "react"
import Question from "../../types/Question"
import { AppDispatch } from "../../app/store"
import { useDispatch } from "react-redux"
import { answerQuestion } from "../../app/features/currentQuiz/currentQuizSlice"
import getScrambledAnswers from "../../utils/question/getScrambledAnswers"
import QuestionResult from "../QuestionResult"

type Props = {
    question:Question
}

const CurrentQuestion = ({question}:Props)=>{

    const [currentSelection,setCurrentSelection] = useState<null|string>(null)
    const dispatch:AppDispatch = useDispatch()
    const {query,correctAnswer,otherOptions,_id} = question

    const options = [...otherOptions,correctAnswer]
    const [scrambledAnswers,setScrambledAnswers] = useState<null|string[]>(null)
    const handleSelect = (option:string)=>{
        if(hasChosen){
            return
        }
        setCurrentSelection(option)
    }
    const [hasChosen,setHasChosen] = useState(false)

    const handleSubmit = ()=>{
        setHasChosen(true)
    }

    const handleNext = ()=>{
        if(!currentSelection){
            return
        }
        dispatch(answerQuestion({_id,playerAnswer:currentSelection}))
        setCurrentSelection(null)
        setHasChosen(false)
    }

    useEffect(()=>{
        const scrambledAnswers = getScrambledAnswers(options)
        setScrambledAnswers(scrambledAnswers)
        setCurrentSelection(null) 
    },[question])

    return<main className="current-question-cont">
        <header>
            <h2>
            {query}
            </h2>
            
            </header>
        <section className="current-question-options">
            {(scrambledAnswers||options).map((option:string,index:number)=>{

                const correct = hasChosen&&option===correctAnswer

                const wrong = hasChosen&&option!==correctAnswer&&option===currentSelection

                return<div key={index} onClick={()=>handleSelect(option)} className={`option ${option===currentSelection?"selected":""} ${correct?"correct":""} ${wrong?"wrong":""}`}>
                    {option}
                </div>
            })}
        </section>
        {currentSelection&&<footer>
            {!hasChosen&&<button onClick={handleSubmit}>Confirm Answer</button>}
            {hasChosen&&<button onClick={handleNext}>Next Question</button>}
        </footer>
        }
    </main>


}

export default CurrentQuestion