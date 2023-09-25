import "./index.scss"
import StaticOption from "../StaticOption"
import SubmittedQuestion from "../../types/SubmittedQuestion"

type Props = {
    question:SubmittedQuestion
    handleAdd:(arg:string)=>void
    handleDelete:(arg:string)=>void

}

const UnassignedQuestion = ({question,handleAdd,handleDelete}:Props)=>{

    const {_id,query,correctAnswer,otherOptions,
    submitterName,
    xProfile,
    youtubeProfile
    } = question

    return <article className="unassigned-question">
        <header>{query}</header>
        <main>
            <ul>
                <StaticOption
                isCorrect={true}
                option={correctAnswer}
                ></StaticOption>
                {otherOptions.map((option:string,index:number)=>{
                    return <StaticOption
                    option={option}
                    isCorrect={false}
                    key={index}
                    ></StaticOption>
                })}
            </ul>
        </main>
        <footer>
            <div className="flex">

                <span>{submitterName}</span>
                {xProfile?<span>{xProfile}</span>:<span></span>}
                {xProfile?<span>{youtubeProfile}</span>:<span></span>}
            </div>
            <div>
                <button onClick={()=>handleDelete(_id)}>Delete</button>
                <button onClick={()=>handleAdd(_id)}>Add to Quiz</button>
            </div>
        </footer>
    </article>
}

export default UnassignedQuestion