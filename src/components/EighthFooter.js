import React from 'react';
import './EighthFooter.css'
import { FaInstagram, FaLinkedin, FaFacebook,  FaTwitter, FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';


function EighthFooter(){
    return(
        
        <div className='footer'>
            <div className='col1'>
            <IconContext.Provider value={{size: "1.5vw", color:"white"}} >
               <span id='colName'>Stop By.</span>
               <span id='colDetail'>💖 Learning</span>
               <span id='socialIcon'>
                   <li><a target="_blank" href="https://www.instagram.com/krunalgamitt"><FaInstagram className="secSocial" /></a></li>
                   <li><a target="_blank" href="https://twitter.com/krunalgamitt"><FaTwitter className="secSocial" /></a></li>
                   <li><a target="_blank" href="https://www.facebook.com/krooksgeek"><FaFacebook className="secSocial" /></a></li>
                   <li><a target="_blank" href="https://github.com/krunal-gamit"><FaGithub className="secSocial" /></a></li>
                   <li><a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/"><FaLinkedin className="secSocial" /></a></li>
               </span>
               </IconContext.Provider>
            </div>
            <div className='col2'>
               <span id='colName'>Say Hi !</span>
               <span id='colDetail'><a href="mailto:krooksgeek@gmail.com">krooksgeek@gmail.com</a></span>
            </div>
            <div className='col3'>
               <span id='colName'>Baby, it's hot outside.</span>
               <span id='colDetail'>Made with ❤️ in<br></br>Vyara, India.</span>
               <span id='copyright'>Copyright © 2023 krooksgeek LLC. All rights reserved.</span>
            </div>
            <div className='space'></div>
        </div>
    );
}

export default EighthFooter;