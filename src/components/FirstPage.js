import './FirstPage.css'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';

const ContainerVariants = {
    initial: {},
    animate: {}
  };

const HVariants = {
    initial: { scale: 0.7 },
    animate: { scale: 1},
    transition: {
      type: "tween",
      duration: "2",
      delay: "10"
    }
  };


function FirstPage(){
    return(
        <div className='mainBody'>
            <div className='name'>
                <span>Krunal Gamit</span>
            </div>
            <motion.div
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
            className='tName'
            >
                <motion.span 
                variants={HVariants}
                >&lt;designer/&gt;<br></br> .developer</motion.span>
            </motion.div>
            <div className='shapes'>
            <IconContext.Provider value={{size: "2.5vw"}} >
                <div id='one'></div>
                <div id='two'></div>
                <div id='three'></div>
                <div id='four'></div>
                <div id='five'><a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/"><FaLinkedin color="#0e76a8" className='firstSocial'/></a></div>
                <div id='six'><a target="_blank" href="https://github.com/krooksgeek"><FaGithub color="white" className='firstSocial' /></a></div>
                <div id='seven'><a target="_blank" href="mailto:krooksgeek@gmail.com"><SiGmail color="#bb001b" className='firstSocial' /></a></div>
            </IconContext.Provider>
            </div>
        </div>
    );
}

export default FirstPage;