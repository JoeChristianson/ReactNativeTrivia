
type InputObject = {
    result: {
        date: string;
        correctAnswers: number;
        passed: boolean;
    };
    date: Date;
};

const checkIfSameDate = (obj:InputObject)=>{
    const resultDate = new Date(obj.result.date);
    const mainDate = new Date(obj.date);

    return (
        resultDate.getDate() === mainDate.getDate() &&
        resultDate.getMonth() === mainDate.getMonth() &&
        resultDate.getFullYear() === mainDate.getFullYear()
    );
}


const getQuizResults = ({date}:{date:Date})=>{
    const storedString = localStorage.getItem("saved-quiz-results-397823234")
    if(!storedString){
        return null
    }
    const allResults = JSON.parse(storedString)
    const match = allResults.find((result:any)=>{
        return checkIfSameDate({result,date})
    })
    console.log({match})
    return match
}

export default getQuizResults