type FinishedQuizDetails = {
    month:number
    year:number
    day:number
    correct:number
    passed:boolean
}


type UserMonthRecord = {
    month:number
    year:number
    finishedQuizzes:FinishedQuizDetails[]
}


export default UserMonthRecord