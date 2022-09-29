import "./index.scss";
import {motion, AnimatePresence} from "framer-motion";
import Backdrop from "../backdrop/Backdrop";





const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};






function Modal({handleClose}) {





    return (
        <div>
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <motion.div className="modal-container">
            </motion.div>
            </motion.div>
        </Backdrop>
        <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
                >
        </AnimatePresence>
        </div>
    )
}




export default Modal;