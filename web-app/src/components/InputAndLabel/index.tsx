import { ChangeEvent } from "react"
import "./index.scss"
import { DynamicAnyObject } from "../../types/DynamicObject"
import camelCaseToTitleCase from "../../utils/convertFromCamelcase"

type Props = {
    formValues:DynamicAnyObject,
    fieldName:string,
    setFormValues:React.Dispatch<DynamicAnyObject>
    textarea:boolean
}

const InputAndLabel = ({formValues,fieldName,setFormValues,textarea}:Props)=>{

    const value= formValues[fieldName]||""

    const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const newFormValues = {...formValues}
        newFormValues[fieldName] = e.target.value
        setFormValues(newFormValues)
    }

    return<div className="input-cont">
        <label>{camelCaseToTitleCase(fieldName)}</label>
        {textarea?<textarea onChange={handleChange} value={value}></textarea>:<input onChange={handleChange} value={value}></input>}
    </div>
}

export default InputAndLabel