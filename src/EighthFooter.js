import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './EighthFooter.css'


function EighthFooter(){
    return(
        <div className='footer'>
            <div className='col1'>
               <span id='colName'>Stop By.</span>
               <span id='colDetail'>🌈 Working Remotly.</span>
               <span id='socialIcon'>
                   <li><SocialIcon target='_blank' style={{ height: 80, width: 80 }} bgColor="black" fgColor="white" url="https://instagram.com/krunalgamit_" /></li>
                   <li><SocialIcon target='_blank' style={{ height: 80, width: 80 }} bgColor="black" fgColor="white" url="https://twitter.com/krunalgamit_" /></li>
                   <li><SocialIcon target='_blank' style={{ height: 80, width: 80 }} bgColor="black" fgColor="white" url="https://facebook.com/krooksgeek" /></li>
                   <li><SocialIcon target='_blank' style={{ height: 80, width: 80 }} bgColor="black" fgColor="white" url="https://linkedin.com/in/krunal-gamit" /></li>
                   <li><SocialIcon target='_blank' style={{ height: 80, width: 80 }} bgColor="black" fgColor="white" url="https://github.com/krooksgeek" /></li>
               </span>
            </div>
            <div className='col2'>
               <span id='colName'>Say Hi.</span>
               <span id='colDetail'><a href="mailto:krooksgeek@gmail.com">krooksgeek@gmail.com</a></span>
            </div>
            <div className='col3'>
               <span id='colName'>Baby, it's hot outside.</span>
               <span id='colDetail'>Made with ❤️ in<br></br>Vyara, India.</span>
               <span id='copyright'>Copyright © 2021 krooks_geek LLC. All rights reserved.</span>
            </div>
            <div className='space'></div>
        </div>
    );
}

export default EighthFooter;