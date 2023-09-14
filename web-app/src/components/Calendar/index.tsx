import { useState } from "react"
import "./index.scss"


const Calendar = ()=>{

    const [date,setDate] = useState({month:8,year:2023})

    const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ]

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

    const quizDays:any = [1,2,3,4,5,6,7,8]

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
            {quizDays.map((q:any)=>{
                return<strong>D</strong>
            })}
        </main>
    </div>
}

export default Calendar