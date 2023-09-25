type Question = {
    _id:string
    query:string
    correctAnswer:string
    otherOptions:[string,string,string]
    playerAnswer?:string
    submitterName?:"Joe Christianson",
    youtubeURL?:"youtube.com",
    xProfile?:"joeman234"
}

export default Question