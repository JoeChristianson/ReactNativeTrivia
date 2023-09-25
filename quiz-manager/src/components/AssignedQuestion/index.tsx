import SubmittedQuestion from "../../types/SubmittedQuestion"
import StaticOption from "../StaticOption"
import "./index.scss"

const AssignedQuestion = ({question,handleRemove}:{question:SubmittedQuestion,handleRemove:(arg0:string)=>void})=>{

    const {_id,query,correctAnswer,otherOptions,} = question

    return<article className="unassigned-question">
        <header>
            {query}
        </header>
        <main>
            <StaticOption option={correctAnswer} isCorrect={true}></StaticOption>
            {otherOptions.map((option:string,index:number)=>{
                return<StaticOption
                isCorrect={false}
                option={option}
                ></StaticOption>
            })}
        </main>
        <footer>
            <button onClick={()=>handleRemove(_id)}>Remove</button>
        </footer>
    </article>
}

export default AssignedQuestion