type SubmittedQuestion = {
    _id:string
    query:string
    correctAnswer:string
    otherOptions:[string,string,string]
    submitterName?:string
    xProfile?:string
    youtubeProfile?:string
    assigned:boolean
}

export default SubmittedQuestion