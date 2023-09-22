import { ChangeEvent } from "react"
import "./index.scss"
import { DynamicAnyObject } from "../../types/DynamicObject"
import t from "../../utils/translateFieldName"

type Props = {
    formValues:DynamicAnyObject,
    fieldName:string,
    setFormValues:React.Dispatch<DynamicAnyObject>
    textarea:boolean
    isInline?:boolean
}

const InputAndLabel = ({formValues,fieldName,setFormValues,textarea,isInline}:Props)=>{

    const value= formValues[fieldName]||""

    const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const newFormValues = {...formValues}
        newFormValues[fieldName] = e.target.value
        setFormValues(newFormValues)
    }

    if(isInline){
        return<div className="input-cont">
        {textarea?<textarea placeholder={t(fieldName)} onChange={handleChange} value={value}></textarea>:<input placeholder={t(fieldName)} onChange={handleChange} value={value}></input>}
    </div>
    }

    return<div className="input-cont">
        <label>{t(fieldName)}</label>
        {textarea?<textarea onChange={handleChange} value={value}></textarea>:<input onChange={handleChange} value={value}></input>}
    </div>
}

export default InputAndLabel