import './SecondPage.css'
import { Link, withRouter } from "react-router-dom";

function SecondPage(props){
    return(
        <div className='mainPage'>
            <div className='box'></div>
            <div className='intro'>
                <span><br></br><br></br>I have a passion for developing better solutions and user experience that are impactful.</span>
                <div className='linkAbout'>
                    
                <li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/about">
                
                    <span>About &nbsp; &#8594;</span>
                    </Link>
                </li>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SecondPage);