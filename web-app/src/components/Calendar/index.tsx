import { useState } from "react"
import "./index.scss"
import CalendarDay from "../CalendarDay"
import createCalendarMonth from "./helpers/createCalendarMonth"


const Calendar = ()=>{

    const [date,setDate] = useState({month:8,year:2023})

    const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ]

    const userMonthRecord = {
        month:date.month,
        year:date.year,
        finishedQuizzes:[
            {
                month:8,
                year:2023,
                day:4,
                correct:7,
                passed:true
            },
            {
                month:8,
                year:2023,
                day:15,
                correct:4,
                passed:false
            }
        ]
    }


    const calendarMonth = createCalendarMonth({userMonthRecord}).days

    const handlePrevious = ()=>{
        if(date.month===0){
            const newDate = {
                month:11,
                year:date.year-1
            }
            setDate(newDate)
            return
        }
        const newDate = {
            ...date,month:date.month-1
        }
        setDate(newDate)
    }

    const handleNext = ()=>{
        if(date.month===11){
            const newDate = {
                month:0,
                year:date.year+1
            }
            setDate(newDate)
            return
        }
        const newDate = {
            ...date,month:date.month+1
        }
        setDate(newDate)
    }

    return<div className="calendar-cont">
        <header className="calendar-header">
            <button onClick={handlePrevious}>Prev</button>
            <div className="date-cont">
            <h3>
            <span className="month">
            {months[date.month]}
            </span>
            <span className="year">
            {date.year}
            </span>
            </h3>
            </div>
            <button onClick={handleNext}>Next</button>
        </header>
        <main className="calendar-grid">
            {calendarMonth.map((q:any)=>{
                
                if(!q){
                    return <div></div>
                }
                
                return<CalendarDay
                    quizDay={q}
                ></CalendarDay>
            })}
        </main>
    </div>
}

export default Calendar