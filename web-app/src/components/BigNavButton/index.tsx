import { ReactNode } from "react"
import "./index.scss"
import { Link } from "react-router-dom"

type Props = {
    children:ReactNode
    dest:string
}

const BigNavButton = ({dest,children}:Props)=>{


    return<Link to={dest}>
    <button className="big-nav-button">
        {children}
    </button>
    </Link>
}

export default BigNavButton