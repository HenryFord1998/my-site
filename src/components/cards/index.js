import "./index.scss";
import { motion } from "framer-motion";





function Card(props){

    return (
        <>
            <div className="card" style={{background: `url(${props.imgUrl})`, backgroundSize: "cover"}}>
            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-body">
                {props.content}
                </p>
                <motion.button 
                type="submit"
                className="card-flat-button" 
                onClick={props.modalValue}
                id={props.value}
                onMouseOver={props.mouseOver}
                >
                Learn More
                </motion.button>
 
            </div>
            </div>     
        </>
    )
}

export default Card;