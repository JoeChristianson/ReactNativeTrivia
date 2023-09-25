import Main from "../../components/Main"
import QuestionAddSuccessScreen from "../../components/successScreens/QuestionAddSuccessScreen"
import SuccessScreenWrapper from "../../components/successScreens/SuccessScreenWrapper"

const Test = ()=>{



    return<Main successScreen={<SuccessScreen/>}>
        <div>
            hello
            </div>
    </Main>
}

export default Test

function SuccessScreen(){

    return<SuccessScreenWrapper>
        <QuestionAddSuccessScreen></QuestionAddSuccessScreen>
    </SuccessScreenWrapper>
}