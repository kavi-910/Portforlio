import { motion } from "framer-motion";

//variants
const StairAnimation = {
    initial: {
        top:"0%",
    },
    animate: {
        top:"100%",
    },
    exit: {
        top:["100%", "0%"],
    },

}

const Stairs = () => {
    return (
        <div>stairs</div>   
    );
};

export default Stairs;