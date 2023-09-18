import { DetailedQuizState } from "../../pages/Quiz/helpers/getQuizState"
import "./index.scss"

type Props = {
    detailedQuizState:DetailedQuizState
}

const QuizAttemptResults = ({detailedQuizState}:Props)=>{


    const correctCount = detailedQuizState.filter(q=>
      q.status==="correct"  
        ).length


    return<main>
        <h1>You're done!!!</h1>
        <div>
            <h1>{correctCount}/10</h1>
        </div>
    </main>
}


export default QuizAttemptResults