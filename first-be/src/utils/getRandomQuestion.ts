import testTriviaQuestions from "../data/testTriviaQuestions"
import Question from "../models/Question";



const getRandomQuestion =async  ()=>{
    const results = await Question.aggregate([{ $sample: { size: 1 } }]).exec();
    return results[0]
}

export default getRandomQuestion