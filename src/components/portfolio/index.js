import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import Modal from "./../modal/Modal"
import ModalContent from "../ModalContent/ModalContent";
import GeneratedCards from "./../generatedCards/index"
import cardData from "../../cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilter } from "@fortawesome/free-solid-svg-icons"


function Portfolio(){
     
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () =>  setModalOpen(true) ;
    const [filterBar, setFilterBar] = useState(false);
    
    const [letterClass, setLetterClass] = useState("text-animate");
    const [ mouseId, setMouseId ] = useState(1);
    // const modalData = useRef([]);
    const [modalData, setModalData] = useState({});
    

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      function handleMouseOver(event) {
        setMouseId(event.target.id)
      }

      function handleData(data){
        setModalData(cardData.find(obj => String(obj.id) === String(data)))
      }


    useEffect(() => {
        handleData(mouseId)
    }, [mouseId])
    

    function handleClick() {
        if (!modalOpen) {
            open();
        } else if (modalOpen) {
            close();
            
        }
    }

    return (<>
    <div className="port-content">
        <div className="container portfolio-page">
            <div className="port-text-zone">
                <h1>
                <AnimatedLetters idx={15} letterClass={letterClass} strArray={["M","y"," ","p","o","r","t","f","o","l","i","o","."]}/>
                </h1>
                <p>Since I'm such a versatile junior, I've worked on many different types of projects. My projects include design, front-end development and back-end development.</p>
            </div> 
        </div>
        <GeneratedCards id={handleClick} mouse={handleMouseOver} filterIcon={!filterBar ? "hidden-bar" : "flat"}/>
        
    </div>
    {modalOpen && <><Modal 
    modalOpen={modalOpen} 
    handleClose={close} 
    />
            <ModalContent
                 title={modalData.title}
                 content={modalData.description}
                 desc1={modalData.modalDescription1}
                 desc2={modalData.modalDescription2}
                 desc3={modalData.modalDescription3}
                 projectLink={modalData.linkToProject} 
                 imageTitle={modalData.title}
                 alt1={modalData.infoImage1Alt}
                 alt2={modalData.infoImage2Alt}
                 alt3={modalData.infoImage3Alt}
                 alt4={modalData.infoImage4Alt}
                 alt5={modalData.infoImage5Alt}
                 image1={modalData.infoImage1}
                 image2={modalData.infoImage2}
                 image3={modalData.infoImage3}
                 image4={modalData.infoImage4}
                 image5={modalData.infoImage5}
                 info1={modalData.projectDescription1}
                 info2={modalData.projectDescription2}
                 info3={modalData.projectDescription3}
                 info4={modalData.projectDescription4}
                 video1={modalData.videoSource1}
                 video2={modalData.videoSource2}
                 video3={modalData.videoSource3}
            /></>
    }
    <div className="icon-div">
    <FontAwesomeIcon 
    icon={faFilter} 
    onClick={() => {
    setFilterBar(!filterBar)
    console.log("clicked")
    }
    
    } 
    className="filter-icon"
    color={filterBar ? "#2B7A77" : "#fff"}
    size="3x"
    />
    </div>
        <Loader type="ball-grid-beat" />
    </>)
}

export default Portfolio;
