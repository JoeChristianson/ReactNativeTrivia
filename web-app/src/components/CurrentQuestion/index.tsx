import "./index.scss"

import { useState } from "react"
import Question from "../../types/Question"
import { AppDispatch } from "../../app/store"
import { useDispatch } from "react-redux"
import { answerQuestion } from "../../app/features/currentQuiz/currentQuizSlice"

type Props = {
    question:Question
}

const CurrentQuestion = ({question}:Props)=>{

    const [currentSelection,setCurrentSelection] = useState<null|string>(null)
    const dispatch:AppDispatch = useDispatch()
    const {query,correctAnswer,otherOptions,_id} = question

    const options = [...otherOptions,correctAnswer]

    const handleSelect = (option:string)=>{
        setCurrentSelection(option)
    }

    const handleSubmit = ()=>{
        if(!currentSelection){
            return
        }
        dispatch(answerQuestion({_id,playerAnswer:currentSelection}))
    }

    return<main className="current-question-cont">
        <header>
            <h2>
            {query}
            </h2>
            
            </header>
        <section className="current-question-options">
            {options.map((option:string,index:number)=>{
                return<div onClick={()=>handleSelect(option)} className={`option ${option===currentSelection?"selected":""}`}>
                    {option}
                </div>
            })}
        </section>
        {currentSelection&&<footer>
            <button onClick={handleSubmit}>Confirm Answer</button>
        </footer>
        }
    </main>


}

export default CurrentQuestion