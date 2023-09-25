import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Question from "../../types/Question"
import "./index.scss"
import { AppDispatch } from "../../app/store"
import { useDispatch } from "react-redux"
import { finishReviewQuestion } from "../../app/features/currentQuiz/currentQuizSlice"

interface Props {
    question:Question
}


const QuestionResult = ({question}:Props)=>{

    const {query,correctAnswer,otherOptions,submitterName,youtubeURL,xProfile,playerAnswer} = question
    const dispatch:AppDispatch = useDispatch()

const answeredCorrectly = playerAnswer===correctAnswer

const otherOnes = otherOptions.filter(o=>o!==playerAnswer)
const hasCredit = submitterName||youtubeURL||xProfile

const handleNext = ()=>{
    dispatch(finishReviewQuestion({_id:question._id}))

}


    return<main className="question-result-main">
        <header className="full">
            <h2 className="center">{query}</h2>
        
        </header>
<section className="full">
    <ul>

    <li className={`correct-answer ${answeredCorrectly&&"got-it"}`}>{correctAnswer}</li>
{!answeredCorrectly&&<li className="wrong-guess">
    {playerAnswer}
    </li>}
{otherOnes.map((option,index)=>{
    return<li className="other-ones"  key={index}>{option}</li>
})}
    </ul>
    {hasCredit&&<div className="credit">
        <h3>Submitted by:</h3>
<ul>
    {submitterName&&<li>{submitterName}</li>}
    {youtubeURL&&<li>{youtubeURL}</li>}
    {xProfile&&<li>xProfile</li>}
</ul>
    </div>}
</section>
<footer>
    <button onClick={handleNext}>Next</button>
</footer>
    </main>
}

export default QuestionResult