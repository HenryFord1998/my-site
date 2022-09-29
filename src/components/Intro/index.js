import "./index.scss";
import gsap from "gsap";

function Intro(){

    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    tl.to('.text', {y:'0', duration: 0.9, stagger: 0.25});
    tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
    tl.to('.intro', {y: '-100%', duration: 1}, "-=1" );

    return (
        <div>
        <div className="slider"></div>
        <div className="intro">
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text">'Learning will</span>
                </h1>
                <h1 className="hide">
                    <span className="text">never exhaust</span>
                </h1>
                <h1 className="hide">
                    <span className="text">the mind.'</span>
                </h1>
            </div>
        </div>
        </div>
    )
}

export default Intro;