import {Link, NavLink} from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/LogoH.png"
import LogoSubtitle from "../../assets/images/LogoS.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


function Sidebar(){

    const [showNav, setShowNav] = useState(false)


    return <div className="nav-bar">
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/henry-ford-4a6610205/">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/HenryFord1998">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/henry.ford.7370">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
        </li>
    </ul>
    <FontAwesomeIcon 
    onClick={() => setShowNav(true)}
    icon={faBars}
    color="#2B7A77"
    size="3x"
    className={!showNav ? 'hamburger-icon' : 'none'}  
    />
    <FontAwesomeIcon 
    icon={faClose}
    color="#2B7A77"
    size="3x"
    className={showNav ? 'hamburger-close' : 'none'}
    onClick={() => setShowNav(false)}
    />
    </div>
}

export default Sidebar;