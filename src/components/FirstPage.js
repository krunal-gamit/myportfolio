import './FirstPage.css'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';



const staggerContainer= {
    initial: {},
    animate:{
        transition:{
            staggerChildren: 0.5,
            delayChildren:0.2,
        },   
    },
};


const  fadeUpVariants = {
    initial:{
        y:40,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity:1,
    transition:{
        duration: 0.7,
        ease: "easeInOut",
    },
    },
};


const  shapeContainer = {
    initial:{},
    animate: {
    transition:{
        staggerChildren: 0.2,
        delayChildren: 0.5,
    },
    },
};

const  shapeWrapper = {
    initial:{
        y:40,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity:1,
    transition:{
        duration: 0.2,
        ease: "easeInOut",
    },
    },
};





function FirstPage(){
    return(
        <div
        className='mainBody'>
            <motion.div
            variants={staggerContainer}
            initial="initial" animate="animate"

            className="fpage"
            >
            <div className='name'>
                <span>Krunal Gamit</span>
            </div>
            
            <motion.div
            variants={fadeUpVariants}
            className='tName'
            >
            <span>&lt;designer/&gt;<br></br> .developer</span>
            </motion.div>
            </motion.div>
            
            <motion.div 
            
            variants={shapeContainer}
            initial="initial" animate="animate"

            className='shapes'>

            <IconContext.Provider value={{size: "2.5vw"}} >

            
                <motion.div variants={shapeWrapper}  id='one'></motion.div>
                <motion.div variants={shapeWrapper} id='two'></motion.div>
                <motion.div variants={shapeWrapper} id='three'></motion.div>
                <motion.div variants={shapeWrapper} id='four'></motion.div>
                <motion.div variants={shapeWrapper} id='five'><a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/"><FaLinkedin color="#0e76a8" className='firstSocial'/></a></motion.div>
                <motion.div variants={shapeWrapper} id='six'><a target="_blank" href="https://github.com/krooksgeek"><FaGithub color="white" className='firstSocial' /></a></motion.div>
                <motion.div variants={shapeWrapper} id='seven'><a target="_blank" href="mailto:krooksgeek@gmail.com"><SiGmail color="#bb001b" className='firstSocial' /></a></motion.div>
                
            </IconContext.Provider>
            </motion.div>
        </div>
    );
}

export default FirstPage;