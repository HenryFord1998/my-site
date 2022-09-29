import { faCss3, faHtml5, faJsSquare, faNodeJs, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import { Link } from "react-router-dom";

function About(){

    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

   return (
    <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["A","b","o","u","t"," ","m","e"]}
                    idx={15}
                />
            </h1>
            <p>I'm a 24-year-old full-stack website developer, looking to further my stack in the development space. I can handle multiple tasks daily and I'm also a dependable person who is great at managing his own time.</p>
            <p>I would love to work for a company where I will be allowed to practice and learn new technologies that would benefit both parties. I have a very creative approach to problem-solving and I am an honest person, which plays a big role in my assertive behaviour. I'm also a very energetic person. I've completed my Ba in Graphic Design with a focus on front-end development and technical design, after which I chose to do a full-stack website development coding bootcamp and I'm currently enrolled and set to start with my next degree in Software Engineering.</p>
            <p>I will most definitely consider myself a valuable investment to any company, as I am a motivated, organised and reliable person.</p>

            <div className="about-buttons">
                <Link to="experience" className="flat-button-about">My Education and Experience</Link>
            </div> 
        </div>
        
        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faNodeJs} color="#44883e"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faWordpress} color="#21759b"/>
                </div>
            </div>
        </div>
    </div>
    <Loader type="ball-grid-beat" />
    </>
   )
}

export default About;