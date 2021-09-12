import './FirstPage.css'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { IconContext } from 'react-icons/lib';

function FirstPage(){
    return(
        <div className='mainBody'>
            <div className='name'>
                <span>Krunal Gamit</span>
            </div>
            <div className='tName'>
                <span>&lt;designer/&gt;<br></br> .developer</span>
            </div>
            <div className='shapes'>
            <IconContext.Provider value={{size: "2.5vw"}} >
                <div id='one' ></div>
                <div id='two'></div>
                <div id='three'></div>
                <div id='four'></div>
                <div id='five'><a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/"><FaLinkedin color="#0e76a8" className='firstSocial'/></a></div>
                <div id='six'><a target="_blank" href="https://github.com/krooksgeek"><FaGithub color="black" className='firstSocial' /></a></div>
                <div id='seven'><a target="_blank" href="mailto:krooksgeek@gmail.com"><SiGmail color="#bb001b" className='firstSocial' /></a></div>
            </IconContext.Provider>
            </div>
        </div>
    );
}

export default FirstPage;