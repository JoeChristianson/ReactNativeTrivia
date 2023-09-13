import { useEffect } from "react"
import getAllQuestions from "../api/get-all-questions"



const AllQuestions = ()=>{

    useEffect(()=>{
        const f = async ()=>{
            const res = await getAllQuestions()
            console.log({res})
        }
        f()
    })

    return<ul>
        <li></li>
    </ul>
}

export default AllQuestions