import { DynamicObject } from "../types/DynamicObject"
import translationLibrary from "./translationLibrary"


interface Args{
    string:string
}

const getMatch = (string:string)=>{
    const lib:DynamicObject = translationLibrary
    const match = lib[string]
    return match || string
}

const convertFromCamelcase = (string:string):string=>{
    const result = string.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}

const t = (string:string)=>{
    return convertFromCamelcase(getMatch(string))
}

export default t