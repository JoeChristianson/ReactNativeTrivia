import Question from "../CurrentQuestionEdit/Question"
import QuestionReview from "../QuestionReview"

type Props = {
    questions:Question[]
}

const ReviewScreen = ({questions}:Props)=>{


    const handleFixQuestion = ()=>{
        
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

        </div>
    </main>
}

export default ReviewScreen