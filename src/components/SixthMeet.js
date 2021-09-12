import './SixthMeet.css'
import { Link, withRouter } from "react-router-dom";

function SixthMeet(props){
    return(
        <div className='meet'>
            <div className='meetText'>
                <span id='textOne'>Lets</span>
                <span id='textTwo'>&#8594;</span>
                <span id='textThree'>Work</span>
            </div>
            <div className='bottomText'>
                <span>The internet is not waiting for a new website. Let's come up with a solution. Feel free! to contact.</span>
                <div className='linkChat'>

                <span class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/contact">
                    <span>Let's Chat&nbsp; &#8594;</span>
                    </Link>
                </span>

                </div>
            </div>
        </div>
    );

}

export default withRouter(SixthMeet);