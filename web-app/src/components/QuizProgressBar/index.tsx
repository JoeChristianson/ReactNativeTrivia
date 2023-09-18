import { DetailedQuizState } from "../../pages/Quiz/helpers/getQuizState"
import "./index.scss"

type Props = {
    detailedQuizState:DetailedQuizState
}

const QuizProgressBar = ({detailedQuizState}:Props)=>{

    console.log({detailedQuizState})

    return<div className="quiz-progress-bar">
        {
            detailedQuizState.map((q)=>{
                return(
        <div className={`question-circle ${q.status}`}>

        </div>

                )
            })
        }
    </div>
}

export default QuizProgressBar