import { DynamicAnyObject } from "../types/DynamicObject"



const isObjectComplete = ({object}:{object:DynamicAnyObject})=>{
    console.log({object})
    for (let key in object){
        console.log({key})
        if(object[key]===""||object[key]===undefined){
            return false
        }
    }
    return true
}

export default isObjectComplete