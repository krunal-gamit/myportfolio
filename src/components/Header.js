import React from 'react';
import { Link, withRouter } from "react-router-dom";

import "./Header.css"
import "./FirstPage.css"

import { motion } from 'framer-motion';

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
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        className="header">
            <div className="logo">
                <span id="logoo">kIg</span>
            </div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <div className="rightHeader">
                <ul>
                    <li  class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}><Link class="nav-link" class="text-light" to="/">HOME 
                <span class="sr-only">(current)</span>
                </Link>
                </li>

                    <li class={`nav-item  ${
                  props.location.pathname === "/playground" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/playground">PLAYGROUND
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/about">ABOUT
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/contact">CONTACT
                </Link>
                </li>

                </ul>
            </div>
        </motion.div>
        </nav>
    );
}

export default withRouter(Header);