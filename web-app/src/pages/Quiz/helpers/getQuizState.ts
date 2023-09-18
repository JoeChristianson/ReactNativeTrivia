import Question from "../../../types/Question"


interface Args {
    questions:Question[]
}

type QuestionStatus = "unanswered"|"correct"|"wrong"

type DetailedQuestionState = {
    query:string
    correctAnswer:string
    otherOptions:string[]
    questionNumber:number
    playerAnswer?:string
    status:QuestionStatus
}

export type DetailedQuizState = DetailedQuestionState[]

const getQuizState = ({questions}:Args)=>{
    const quizState:DetailedQuizState = questions.map((q,index)=>{
        const questionNumber = index+1
        let status:QuestionStatus 
        if(!q.playerAnswer){
            status="unanswered"
        }
        else if(q.playerAnswer===q.correctAnswer){
            status="correct"
        }
        else{
            status = "wrong"
        }
        return {...q,questionNumber,status}
    })
    return quizState
}

export default getQuizState