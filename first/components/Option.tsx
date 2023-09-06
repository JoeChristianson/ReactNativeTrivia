import { useContext, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { AppContext } from "../context/AppContext"

type Props = {
    option:string
}


const Option = ({option}:Props)=>{


    const {setSelectedOption,selectedOption}:any = useContext(AppContext)

    const handleClick = ()=>{
        setSelectedOption(option)
    }

    const clickedStyle = {color:"red",fontSize:30,backgroundColor:"#222222"}

    
    const isSelected = selectedOption===option
    const extraStyle = isSelected?clickedStyle:{}

    return(
        <TouchableOpacity
                onPress={handleClick}
        >

        <Text
        style={{...style,...extraStyle}}>
            {option}
        </Text>
            </TouchableOpacity>)
}

export default Option

const style = {
    fontSize:28,
    padding:10,
    // textAlign:"center",
    borderWidth:2,
    margin:10
}