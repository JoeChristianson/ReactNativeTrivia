import { ReactNode } from "react"
import "./index.scss"
interface Props {
    children:ReactNode

}


const SuccessScreenWrapper = ({children}:Props)=>{
    return<main className="success-screen-wrapper">
        {children}
 
 
    </main>
}

export default SuccessScreenWrapper