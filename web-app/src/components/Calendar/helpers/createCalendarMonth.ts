import QuizDay from "../../../types/QuizDay"
import UserMonthRecord from "../../../types/UserMonthRecord"
import getMonthInfo from "./getMonthInfo"

interface Props {
    userMonthRecord:UserMonthRecord
}

type Res = {
    days:(null|QuizDay)[]
}

const createCalendarMonth = ({userMonthRecord}:Props)=>{
    const {year,month,finishedQuizzes} = userMonthRecord
    const {daysInMonth,firstDayOfWeek} = getMonthInfo(year,month)
    const days = []
    for (let i=0;i<firstDayOfWeek;i++){
        days.push(null)
    }
    for (let i=1;i<(daysInMonth+1);i++){
        const match = finishedQuizzes.find(q=>q.day===i)
        const day:QuizDay = {
            year,
            month,
            day:i,
            status:"incomplete"
        }
        if(match){
            day.correct=match.correct;
            match.passed?day.status="passed":day.status="failed"
        }

        days.push(day)
    }

    const res:Res = {days}
    return res
}

export default createCalendarMonth