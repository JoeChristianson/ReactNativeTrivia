type Question = {
    _id:string
    query:string
    correctAnswer:string
    otherOptions:[string,string,string]
    playerAnswer?:string
}

export default Question