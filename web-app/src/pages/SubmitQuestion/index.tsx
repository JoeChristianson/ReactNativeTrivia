import { useState } from "react"
import InputAndLabel from "../../components/InputAndLabel"
import "./index.scss"
import { DynamicAnyObject } from "../../types/DynamicObject"
import isObjectComplete from "../../utils/isObjectComplete"
import submitQuestion from "../../api/submitQuestion"

const SubmitQuestion = ()=>{

    const initialFormValues = {
        query:"",
        correctAnswer:"",
        otherOption1:"",
        otherOption2:"",
        otherOption3:"",
        submitterName:"",
        youtubeProfile:"",
        xProfile:""
    }

    const textAreas = [
        "query","correctAnswer","otherOption1","otherOption2","otherOption3"
    ]

    const [formValues,setFormValues] = useState<DynamicAnyObject>(initialFormValues)

    const fields = Object.keys(formValues)

    const requiredFields = {
        query:formValues.query,
        correctAnswer:formValues.correctAnswer,
        otherOption1:formValues.otherOption1,
        otherOption2:formValues.otherOption2,
        otherOption3:formValues.otherOption3,
    }

    const isComplete = isObjectComplete({object:requiredFields})

    const handleSubmit = ()=>{
        const {query,correctAnswer,otherOption1,otherOption2,otherOption3,submitterName,youtubeProfile,xProfile} = formValues
        const variables = {
            query,correctAnswer,otherOptions:[otherOption1,otherOption2,otherOption3],submitterName,youtubeProfile,xProfile
        }
        submitQuestion(variables)

    }

    return<main className="submit-question-main">
        {fields.map((f)=>{
            return<InputAndLabel
            fieldName={f}
            formValues={formValues}
            setFormValues={setFormValues}
            textarea={textAreas.includes(f)}
            ></InputAndLabel>
        })}
        {isComplete&&<button onClick={handleSubmit}>Submit Question</button>}
    </main>
}

export default SubmitQuestion