import { MouseEventHandler, useState } from "react"
import addQuestion from "../api/add-question"



const SubmitQuestion = ()=>{

    const initial = {
        question:"",
        correctAnswer:"",
        option1:"",
        option2:"",
        option3:""
    }

    const [state,setState] = useState(initial)

    const handleSubmit:MouseEventHandler = (e)=>{
        e.preventDefault()
        const otherOptions = [state.option1,state.option2,state.option3]
        const {correctAnswer,question} = state
        addQuestion({question,correctAnswer,otherOptions})
    }
    


    return(<form>
        <div className="input-cont">
        <label>Question</label>
        <input value={state.question}
        onChange={(e)=>setState({...state,question:e.target.value})}
        ></input>
        </div>
        
        <div className="input-cont">
        <label>Answer</label>
        <input value={state.correctAnswer}
        onChange={(e)=>setState({...state,correctAnswer:e.target.value})}
        ></input>
        </div>
        
        Wrong Options

        <div className="input-cont">
        <label>Option One</label>
        <input value={state.option1}
        onChange={(e)=>setState({...state,option1:e.target.value})}
        ></input>
        </div>
        
        <div className="input-cont">
        <label>Option Two</label>
        <input value={state.option2}
        onChange={(e)=>setState({...state,option2:e.target.value})}
        ></input>
        </div>
        
        <div className="input-cont">
        <label>Option Three</label>
        <input value={state.option3}
        onChange={(e)=>setState({...state,option3:e.target.value})}
        ></input>
        </div>

        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </form>)
}

export default SubmitQuestion