import { MouseEventHandler, useState } from "react"
import InputAndLabel from "../../components/InputAndLabel"
import "./index.scss"
import { DynamicAnyObject } from "../../types/DynamicObject"
import isObjectComplete from "../../utils/isObjectComplete"
import submitQuestion from "../../api/submitQuestion"
import SubmitButton from "../../components/SubmitButton"
import MobileNav from "../../layout/MobileNav"
import Main from "../../components/Main"
import SuccessScreenWrapper from "../../components/successScreens/SuccessScreenWrapper"
import BigNavButton from "../../components/BigNavButton"

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

    const [successScreen,setSuccessScreen] = useState<null|true>(true)
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

    const handleSubmit:MouseEventHandler<HTMLButtonElement> = async (e)=>{
        e.preventDefault()
        const {query,correctAnswer,otherOption1,otherOption2,otherOption3,submitterName,youtubeProfile,xProfile} = formValues
        const variables = {
            query,correctAnswer,otherOptions:[otherOption1,otherOption2,otherOption3],submitterName,youtubeProfile,xProfile
        }
        const res = await submitQuestion(variables)
        if(res.success){

        setSuccessScreen(true)
    }
}

    const SuccessScreenProp = successScreen&&<SuccessScreen></SuccessScreen>

    return<Main successScreen={SuccessScreenProp}>
        <main className="submit-question-main">
        <MobileNav></MobileNav>
        <form>
        <div>

        {fields.map((f)=>{
            return<InputAndLabel
            fieldName={f}
            formValues={formValues}
            setFormValues={setFormValues}
            textarea={textAreas.includes(f)}
            isInline={true}
            ></InputAndLabel>
        })}
            </div>
            <footer>
        {!isComplete&&<SubmitButton handleClick={handleSubmit}>Submit Question</SubmitButton>}
            </footer>
        </form>
    </main>
        </Main>
}

export default SubmitQuestion

function SuccessScreen(){

    return<SuccessScreenWrapper>
 <header className="question-submit-success-header">
    <h1>

    Your question has been submitted.
    </h1>
 </header><main className="question-submit-success-main">
        <BigNavButton dest="/submit-question?1">Submit Another Question</BigNavButton>
        <BigNavButton dest="/">Home</BigNavButton>
 </main>

    </SuccessScreenWrapper>
}