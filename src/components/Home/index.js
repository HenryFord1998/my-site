import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/LogoH.png"
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./Logo/index"
import cv from "./../../assets/images/CV.pdf"

function Home() {

    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray=["e","n","r","y"];
    const jobArray = ["a"," "," ","j","u","n","i","o","r"," ","w","e","b"," ","d","e","v","."];

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span><span> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray} 
            idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} 
            strArray={jobArray} 
            idx={12}/>
            </h1>
            <h2>Full-Stack Website Development & Design</h2>
            <div className="home-buttons">
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            <Link to={cv} target="_blank" className="flat-button">DOWNLOAD CV</Link>
            </div>
            
        </div>
        <Logo/>
    </div>
    <Loader type="ball-grid-beat" />
    </>
)}

export default Home;
