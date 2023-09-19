import "./index.scss"
import { MouseEventHandler, ReactNode } from "react"

type Props = {
    children:ReactNode
    handleClick:MouseEventHandler<HTMLButtonElement>
}

const SubmitButton = ({children,handleClick}:Props)=>{
    return<button className="submit-button" onClick={handleClick}>
        {children}
    </button>
}

export default SubmitButton