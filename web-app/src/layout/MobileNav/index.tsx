import "./index.scss"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const MobileNav = ()=>{
    // home on left side, hamburger on other
    return<header className="mobile-nav-header">
        <div className="left">
        <Link to={"/"}>
        <FontAwesomeIcon size="2x" icon={faHome} />
        </Link>
        </div>
        <div className="right">
            
        </div>
    </header>
}

export default MobileNav