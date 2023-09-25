import "./index.scss"

interface Props {
    option:string
    isCorrect:boolean
}

const StaticOption = ({option,isCorrect}:Props)=>{


    return<li className={`static-option ${isCorrect?"correct":""}`}>{option}</li>
}

export default StaticOption