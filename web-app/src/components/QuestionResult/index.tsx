import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Question from "../../types/Question"
import "./index.scss"

interface Props {
    question:Question
    guess:string

}


const QuestionResult = ({question,guess}:Props)=>{

    const {query,correctAnswer,otherOptions,submitterName,youtubeURL,xProfile} = question

const answeredCorrectly = guess===correctAnswer

const otherOnes = otherOptions.filter(o=>o!==guess)
const hasCredit = submitterName||youtubeURL||xProfile

console.log({submitterName})
    return<main className="question-result-main">
        <header className="full">
            <h2 className="center">{query}</h2>
        
        </header>
<section className="full">
    <ul>

    <li className={`correct-answer ${answeredCorrectly&&"got-it"}`}>{correctAnswer}</li>
{!answeredCorrectly&&<li className="wrong-guess">
    {guess}
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
    <button>Next</button>
</footer>
    </main>
}

export default QuestionResult