import './SecondPage.css'
import { Link, withRouter } from "react-router-dom";



function SecondPage(props){
    return(
        
        <div className='mainPage' >
            <div data-Aos="fade-up" className='box'><img src="/img/Img1.png" ></img></div>
            
            <div data-Aos="fade-right" className='intro'>
                <span><br></br><br></br>I have a passion for developing better solutions and user experience that are impactful.</span>
                <div className='linkAbout'>
                    
                <li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/about">
                
                    <span>About &nbsp; <a id="aboutArr"> &#8594;</a></span>
                    </Link>
                
                </li>
                </div>
            </div>
            
        </div>
    );
}

export default withRouter(SecondPage);