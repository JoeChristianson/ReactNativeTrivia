

const getQuizFromLocalStorage = ()=>{
    const jsonString = localStorage.getItem("quiz-build")
    if(!jsonString){
        return null
    }
    return JSON.parse(jsonString)
}

export default getQuizFromLocalStorage