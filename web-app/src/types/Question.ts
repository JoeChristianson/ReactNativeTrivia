type Question = {
    _id:string
    query:string
    correctAnswer:string
    otherOptions:[string,string,string]
    playerAnswer?:string
    reviewed?:boolean
}

export default Question