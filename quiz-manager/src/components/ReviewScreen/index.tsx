import submitQuiz from "../../api/submitQuiz"
import Question from "../CurrentQuestionEdit/Question"
import QuestionReview from "../QuestionReview"

type Props = {
    questions:Question[]
}

const ReviewScreen = ({questions}:Props)=>{


    const handleFixQuestion = ()=>{

    }

    const handleSubmitButton =async  ()=>{
        const res = await submitQuiz({questions})
    }

    return<main>
        <h1>Review Quiz Before Submitting</h1>
        <div className="all-questions">
            {questions.map((question,index)=>{
                return<QuestionReview
                question={question}
                questionIndex={index}
                handleFixQuestion={handleFixQuestion}
                ></QuestionReview>
            })}
            <button onClick={handleSubmitButton}>Submit Quiz</button>
        </div>
    </main>
}

export default ReviewScreen