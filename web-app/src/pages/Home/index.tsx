import getQuizResults from "../../utils/getQuizResults"
import getToday from "../../utils/getTodaysDate"
import Quiz from "../Quiz"
import "./index.scss"
const Home = ()=>{

    const date = getToday()
    const today = new Date();
    const quizResults = getQuizResults({date:today})

    if(quizResults){
        return<main className="today-quiz">
            <h1>
                Today's Quiz Has Been Completed.
                </h1>
                <p>Come tomorrow for a new quiz.</p>
        </main>
    }

    return<main className="today-quiz">
        <h1>Today's Quiz</h1>
        <Quiz
        date={date}
        ></Quiz>
    </main>
}

export default Home