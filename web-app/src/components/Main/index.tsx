import { ReactNode } from "react"
import "./index.scss"

interface Props {
    children:ReactNode
    successScreen?:ReactNode
}
// we'll add the stylings for mobile and the loading screen in here.
const Main = ({children,successScreen}:Props)=>{


    return<main className="main-wrapper-1">
        {children}
        {successScreen}
    </main>
}

export default Main