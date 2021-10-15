import React from 'react';
import { Link, withRouter } from "react-router-dom";

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
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <div
            className="rightHeader">
                <ul>
                    <motion.div variants={fadeInVariants}><li  class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}><Link class="nav-link" class="text-light" to="/">HOME 
                <span class="sr-only">(current)</span>
                </Link>
                </li></motion.div>

                <motion.div variants={fadeInVariants}><li class={`nav-item  ${
                  props.location.pathname === "/playground" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/playground">PLAYGROUND
                </Link>
                </li></motion.div>
                <motion.div variants={fadeInVariants}><li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/about">ABOUT
                </Link>
                </li></motion.div >
                <motion.div variants={fadeInVariants}><li class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/contact">CONTACT
                </Link>
                </li></motion.div>

                </ul>
            </div>
        </motion.div>
        </nav>
    );
}

export default withRouter(Header);