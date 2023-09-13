import React, { ReactNode, useEffect, useState } from 'react';
import makeAllOptions from '../utils/makeAllOptions';

export const AppContext = React.createContext({})

const AppProvider:any = ({ children }:{children:ReactNode}):any => {

  const [selectedOption,setSelectedOption] = useState<null|string>(null)
const [question,setQuestion] = useState<any>(null)

  const [options,setOptions] = useState<null|string[]>(null)
  const [pastQuestions,setPastQuestions] = useState<string[]>([])
  
  console.log("runing context")

  useEffect(()=>{
    try{

      const f = async ()=>{
        console.log("trying to fetch")
        const res = await fetch("http://172.16.1.44:3005/api/random-question")
        const data = await res.json()
        console.log({data})
        const {query,correctAnswer,otherOptions} = data.question
        const allOptions = makeAllOptions({answer:correctAnswer,otherOptions})
        setOptions(allOptions)
        setQuestion(query)
      }
      f()
    }catch(err){
      console.log({err})
    }
  },[pastQuestions])

  const handleSubmit = ()=>{
    

    // console.log("it's happening")
    // setPastQuestions([...pastQuestions,question])
  }


  return (
    <AppContext.Provider value={{ options,selectedOption,setSelectedOption, question,handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider