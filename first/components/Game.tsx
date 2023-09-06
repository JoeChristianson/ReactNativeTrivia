import { Text, View } from "react-native"
import Question from "./Question"
import { useContext, useEffect, useState } from "react"
import makeAllOptions from "../utils/makeAllOptions"
import Option from "./Option"
import {AppContext} from "../context/AppContext"
import Button from "./Button/Button"



const Game = ()=>{

  const {question,options,selectedOption,handleSubmit}:any = useContext(AppContext)


  if(!question){
    return<></>
  }

    return(<View>
      <Text>The Game is On!</Text>
                <Question>
          {question}
        </Question>
        {options?.map((option:string,index:number)=>{
          return<Option
          key={index}
          option={option}
          ></Option>
        })}
        {(selectedOption!==null)&&<Button
        onPress={handleSubmit}
        text="Submit"
        ></Button>}
    </View>)
}

export default Game