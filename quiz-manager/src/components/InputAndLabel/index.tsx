import { ChangeEvent } from "react"
import { DynamicAnyObject } from "../../types/genericObjects"
import "./index.scss"

type Props = {
    formValues:DynamicAnyObject,
    fieldName:string,
    setFormValues:React.Dispatch<DynamicAnyObject>
}

const InputAndLabel = ({formValues,fieldName,setFormValues}:Props)=>{

    const value= formValues[fieldName]||""

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const newFormValues = {...formValues}
        newFormValues[fieldName] = e.target.value
        setFormValues(newFormValues)
    }

    return<div className="input-cont">
        <label>{fieldName}</label>
        <input onChange={handleChange} value={value}></input>
    </div>
}

export default InputAndLabel