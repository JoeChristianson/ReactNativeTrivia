import Question from "../CurrentQuestionEdit/Question"

type Props = {
    question:Question
    questionIndex:number
    handleFixQuestion:(ar0:string)=>void
}


const QuestionReview = ({question,questionIndex}:Props)=>{


    return<article>
        <h3>{question.query}</h3>
        <section className="options">
            <ol>
                <li>{question.correctAnswer} (correct)</li>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
            </ol>
        </section>
    </article>
}

export default QuestionReview