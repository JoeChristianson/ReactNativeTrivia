import QuestionResult from "../../components/QuestionResult"

import Question from "../../types/Question"

const Test = ()=>{


    const question:Question = {
        _id:"dioinsdfsdf",
        query:"What is this question",
        correctAnswer:"The correct one",
        otherOptions:[
            "Wrong One","Your wrong guess","The last guess"
        ],
        submitterName:"Joe Christianson",
        

    }

    const guess = "Your wrong guess"

    return<QuestionResult
    question={question}
    guess={guess}
    ></QuestionResult>}

export default Test

