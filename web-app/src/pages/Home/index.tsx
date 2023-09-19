import BigNavButton from "../../components/BigNavButton"
import Logo from "../../components/Logo"
import "./index.scss"
const Home = ()=>{

    return<main className="home-main">
        <Logo></Logo>
        <div className="button-cont">

        <BigNavButton dest="/quiz">
            <h2>Today's Quiz</h2>
        </BigNavButton>
        <BigNavButton dest="/submit-question">
            <h2>Submit Question</h2>
            </BigNavButton>        
        </div>
    </main>
}

export default Home