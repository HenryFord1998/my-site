import {  useRef } from 'react'
import LogoH from '../../../assets/images/LogoH.png'
import './index.scss'
import {motion} from "framer-motion";

const svgVariants = {
  visible: {
    transition: { duration: 1 }
  }
}

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 10,
      ease: "easeInOut"
    }
  }

}

function Logo() {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return(
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoH} alt="LogoH" />
            <motion.svg  
            xmlns="http://www.w3.org/2000/svg"
            width="510px" 
            height="690px" 
            viewBox="0 0 300.000000 413.000000"
            className="svg-container" 
            >
            <motion.g 
            transform="translate(0.000000,413.000000) scale(0.100000,-0.100000)"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            fill="none">
            <motion.path ref={outlineLogoRef} variants={pathVariants} d="M110 4091 c-36 -22 -74 -49 -85 -61 -20 -22 -20 -45 -23 -1977 -2
            -2171 -8 -2004 64 -2038 29 -14 78 -15 386 -13 l353 3 83 50 82 50 0 777 0
            778 490 0 c521 0 534 -1 556 -47 5 -10 11 -361 14 -780 l5 -763 33 -32 32 -33
            368 0 368 0 80 50 79 51 0 2009 0 2010 -394 3 -394 2 -69 -41 c-118 -70 -108
            17 -108 -896 l0 -793 -530 0 -530 0 0 865 0 865 -397 0 -398 0 -65 -39z m840
            -841 l0 -860 540 0 540 0 0 -305 0 -305 -540 0 -540 0 0 -830 0 -830 -385 0
            -385 0 0 1993 c0 1097 2 1996 4 1998 2 2 176 3 385 2 l381 -3 0 -860z m2030
            -1139 c0 -1822 -1 -2003 -16 -1997 -9 3 -182 6 -385 6 l-369 0 0 1993 c0 1097
            2 1996 4 1998 2 2 176 4 385 4 l381 0 0 -2004z m-2433 -2013 l377 -3 -62 -37
            -63 -38 -357 0 c-314 0 -360 2 -381 16 -54 38 -51 -69 -51 2006 0 2193 -11
            1964 95 2028 l60 37 3 -2004 2 -2003 377 -2z m2031 0 l377 -3 -67 -38 -66 -37
            -357 0 -357 0 -29 29 -29 29 0 749 c0 692 -1 751 -18 783 -35 71 -29 70 -574
            70 l-488 0 0 40 0 40 538 2 537 3 5 1122 c5 1015 7 1124 21 1138 9 9 41 31 70
            49 l54 32 3 -2003 2 -2003 378 -2z"/>
            </motion.g>
            </motion.svg>
        </div>
    )
}

export default Logo;