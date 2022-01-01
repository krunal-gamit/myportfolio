import React, {useState} from 'react';
import { Link, withRouter } from "react-router-dom";
import {FaTimes, FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import "./Header.css"
import "./FirstPage.css"

import { motion } from 'framer-motion';


const staggerContainer= {
  initial: {},
  animate:{
      transition:{
          staggerChildren: 0.1,
          delayChildren:0.2,
      },   
  },
};


const  fadeInVariants = {
  initial:{
      y:-60,
      opacity: 0,
  },
  animate: {
      y:0,
      opacity:1,
  transition:{
      duration: 0.3,
      ease: "easeInOut",
  },
  },
};





function Header(props) {

  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  const [newclick, setnewClick] = useState(false);

  const newclickHandler = () => {
    setnewClick(!newclick);
  };

  



    return(
        <nav class="">
        <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="header">
            <motion.div variants={fadeInVariants} className="logo">
                <span id="logoo">kIg</span>
            </motion.div>
          
            <div
            className="rightHeader">
                <ul className={click ? "nav-list active" : "nav-list" && newclick ? "nav-list": " nav-list"} >
                    <motion.div variants={fadeInVariants}><li onClick={newclickHandler} class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}><Link class="nav-link" class="text-light" to="/">HOME 
                <span class="sr-only">(current)</span>
                </Link>
                </li></motion.div>

                <motion.div variants={fadeInVariants}><li onClick={newclickHandler} class={`nav-item  ${
                  props.location.pathname === "/playground" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/playground">PLAYGROUND
                </Link>
                </li></motion.div>
                <motion.div variants={fadeInVariants}><li onClick={newclickHandler} class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/about">ABOUT
                </Link>
                </li></motion.div >
                <motion.div variants={fadeInVariants}><li onClick={newclickHandler} class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/contact">CONTACT
                </Link>
                </li></motion.div>

                </ul>
            </div>
            <IconContext.Provider value={{ color:"white", background:"transparent"}} >
            <div onClick={clickHandler} className='hamburger'>{click ? <FaTimes/>:  <FaBars/> }  </div>
            </IconContext.Provider>
        </motion.div>
        </nav>
    );
}

export default withRouter(Header);