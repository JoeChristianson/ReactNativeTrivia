import { useEffect, useState } from "react"
import "./index.scss"
import getUnassignedQuestions from "../../api/get-unassigned-questions"
import UnassignedQuestion from "../../components/UnassignedQuestion"
import SubmittedQuestion from "../../types/SubmittedQuestion"
import AssignedQuestion from "../../components/AssignedQuestion"
import deleteQuestion from "../../api/delete-question"
import submitBuiltQuiz from "../../api/submit-built-quiz"


const QuizBuilder = ()=>{
    
    const [questions,setQuestions] = useState<SubmittedQuestion[]>([])
    


    useEffect(()=>{
        const f = async ()=>{
            const res = await getUnassignedQuestions()
            const questions = res.questions||[]
            setQuestions(questions)
        }
        f()
    },[])

    const unassignedQuestions = questions.filter((q:any)=>!q.assigned)
    console.log({unassignedQuestions})
    const assignedQuestions = questions.filter((q:any)=>q.assigned)
    const handleAdd = (_id:string)=>{
        if(assignedQuestions.length===10){
            return
        }
        const newQuestions = [...questions]
        const match = newQuestions.find(q=>q._id===_id)
        if(!match){
            return
        }
        match.assigned = true
        setQuestions(newQuestions)
    }

    const handleRemoveFromQuiz = (_id:string)=>{
        const newQuestions = [...questions]
        const match = newQuestions.find(q=>q._id===_id)
        if(!match){
            return
        }
        match.assigned = false
        setQuestions(newQuestions)
        
    }
    
    const handleDelete = async (_id:string)=>{
        const newQuestions = [...questions].filter(q=>q._id!==_id)
        setQuestions(newQuestions)
        deleteQuestion({_id})
    }

    const handleSubmit = ()=>{
        const questionIds = assignedQuestions.map(q=>q._id)
        submitBuiltQuiz({questionIds})
    }


    return<>
    <header>{assignedQuestions.length===10?<button onClick={handleSubmit}>
        Submit Quiz
    </button>:<></>}</header>
    <main className="quiz-builder-main">
        <section className="quiz-builder">
            {assignedQuestions.map((question:SubmittedQuestion,index:number)=>{
                return<AssignedQuestion
                handleRemove={handleRemoveFromQuiz}
                question={question}
                ></AssignedQuestion>
            })}
        </section>
        <section className="unassigned-section">
            {unassignedQuestions.map((question:SubmittedQuestion,index:number)=>{
                return<UnassignedQuestion
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                question={question}></UnassignedQuestion>
            })}
        </section>
    </main>
    </>
}

export default QuizBuilder