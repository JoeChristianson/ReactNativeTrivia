import QuizDay from "../../types/QuizDay"
import "./index.scss"

interface Props {
    quizDay:QuizDay
}


const CalendarDay = ({quizDay}:Props)=>{
    
    const {year,month,day,correct,status} = quizDay

    const handleClick = ()=>{
        
        window.location.href = `/quiz?day=${day}&month=${month}&year=${year}`
    }

    return<div onClick={handleClick} className={`calendar-day ${status}`}>
        <div className="day-number">
            {day}
        </div>
    </div>
}

export default CalendarDay