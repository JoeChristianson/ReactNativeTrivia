import testTriviaQuestions from "../data/testTriviaQuestions"



const getRandomQuestion = ()=>{
    const questions = testTriviaQuestions
    const randomIndex = Math.floor(Math.random()*questions.length)
    console.log({randomIndex,questions})
    return questions[randomIndex]
}

export default getRandomQuestion