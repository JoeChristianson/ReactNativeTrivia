import React, { ReactNode, useEffect, useState } from 'react';
import makeAllOptions from '../utils/makeAllOptions';

export const AppContext = React.createContext({})

const AppProvider:any = ({ children }:{children:ReactNode}):any => {

  const [selectedOption,setSelectedOption] = useState<null|string>(null)
const [question,setQuestion] = useState<any>(null)

  const [options,setOptions] = useState<null|string[]>(null)
  const [pastQuestions,setPastQuestions] = useState<string[]>([])
  
  useEffect(()=>{
    try{

      const f = async ()=>{
        const res = await fetch("http://192.168.1.64:3000/api/random-question")
        const data = await res.json()
        const {question,answer,otherOptions} = data.question
        const allOptions = makeAllOptions({answer,otherOptions})
        setOptions(allOptions)
        setQuestion(question)
      }
      f()
    }catch(err){
      console.log({err})
    }
  },[pastQuestions])

  const handleSubmit = ()=>{
    console.log("it's happening")
    setPastQuestions([...pastQuestions,question])
  }


  return (
    <AppContext.Provider value={{ options,selectedOption,setSelectedOption, question,handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider