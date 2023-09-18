
type Props = {
    date:Date
    correctAnswers:number
    passed:boolean
}

const saveQuizResults = ({date,correctAnswers,passed}:Props)=>{
    const savedQuizResultsString = localStorage.getItem("saved-quiz-results-397823234")
    let newQuizResults
    if(!savedQuizResultsString){
        newQuizResults = [{date,correctAnswers,passed}]
    }else{
        newQuizResults = [...JSON.parse(savedQuizResultsString),{date,correctAnswers,passed}]
    }
    localStorage.setItem("saved-quiz-results-397823234",JSON.stringify(newQuizResults))
}

export default saveQuizResults