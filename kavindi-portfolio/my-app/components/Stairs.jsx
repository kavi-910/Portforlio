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

// calculate the s reverse index for staggered deplay
const reverseIndex = (index) =>{
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}


const Stairs = () => {
    return <>
    
    {/* render 6 motion divs, each representing a step of the stairs 
    Each div will have same animation defined by the stairAnimation object.
    The delay for each div is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each subsequent step.
   */}
   {[...Array(6)].map((_, index) => {
        return(
            <motion.div 
                key={index} 
                variants={StairAnimation} 
                initial="initilal" 
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index)*0.1,
                }}
                className="h-full w-full bg-white relative"
            />
        );
   })}
    </>

};

export default Stairs;