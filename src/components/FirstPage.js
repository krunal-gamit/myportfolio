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


const shapeOne ={
    initial: {},
    animate: (i)=> ({
        y: [0, 120, 0, -120, 0],
        transition:{
            delay:0.2,
            duration: 3,
            ease:"linear",
            repeat:Infinity,
        },
    }),
};

const shapeTwo ={
    initial: {},
    animate: (i)=> ({
        y: [120,0,-120,0, 120],
        transition:{
            delay:0.2,
            duration: 3,
            ease:"linear",
            repeat:Infinity,
        },
    }),
};

const shapeThree ={
    initial: {},
    animate: (i)=> ({
        y: [0, 100,0,-100, 0],
        transition:{
            delay:0,
            duration: 6,
            ease:"linear",
            repeat:Infinity,
        },
    }),
};
const shapeFour ={
    initial: {},
    animate: (i)=> ({
        y: [100, 0, -100, 0, 100],
        transition:{
            delay:0.3,
            duration: 7,
            ease:"linear",
            repeat:Infinity,
        },
    }),
};


const shapeiOne ={
    initial: {},
    animate:{
        y: [0, -4, 0, 4, 0],
        transition:{
            delay:0.1,
            duration: 3,
            ease:"linear",
            repeat:Infinity,
        },
    },
};

const shapeiTwo ={
    initial: {},
    animate:{
        y: [0, -4, 0, 4, 0],
        transition:{
            delay:0.3,
            duration:3,
            ease:"linear",
            repeat:Infinity,
        },
    },
};

const shapeiThree ={
    initial: {},
    animate:{
        y: [0, -4, 0, 4, 0],
        transition:{
            delay:0.5,
            duration: 3,
            ease:"linear",
            repeat:Infinity,
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

            
            <motion.div variants={shapeWrapper} ><motion.div variants={shapeOne} id='one'></motion.div></motion.div>
                <motion.div variants={shapeWrapper} ><motion.div variants={shapeTwo} id='two'></motion.div></motion.div>
                <motion.div variants={shapeWrapper}><motion.div variants={shapeThree}  id='three'></motion.div></motion.div>
                <motion.div variants={shapeWrapper}><motion.div variants={shapeFour}  id='four'></motion.div></motion.div>
                <motion.div variants={shapeWrapper}><motion.div variants={shapeiOne} whileHover={{scale: 1.2}} id='five'><a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/"><FaLinkedin color="#0e76a8" className='firstSocial'/></a></motion.div></motion.div>
                <motion.div variants={shapeWrapper}><motion.div variants={shapeiTwo} whileHover={{scale: 1.2}} id='six'><a target="_blank" href="https://github.com/krooksgeek"><FaGithub color="white" className='firstSocial' /></a></motion.div></motion.div>
                <motion.div variants={shapeWrapper}><motion.div variants={shapeiThree} whileHover={{scale: 1.2}} id='seven'><a target="_blank" href="mailto:krooksgeek@gmail.com"><SiGmail color="#bb001b" className='firstSocial' /></a></motion.div></motion.div>
            </IconContext.Provider>
            </motion.div>
        </div>
    );
}

export default FirstPage;