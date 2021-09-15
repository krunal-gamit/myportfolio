import './FourthProjects.css';
import { Link, withRouter } from "react-router-dom";

function FourthProjects(props){
    return(
        <div className='projects'>
            
                
            <div className='one'>
            <span class={`nav-item  ${
                  props.location.pathname === "/airline-booking" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/airline-booking">
    
                <div className='gig'><img src='/img/Image_11.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Airline Booking</div>
                    <div id='ln'>Full Stack</div>
                </div>
                </Link>
            </span>
            </div>

            
            <div className='two'>
            <span class={`nav-item  ${
                  props.location.pathname === "/personal-portfolio1" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/personal-portfolio1">
    
            <div className='gig'><img src='/img/Image_12.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Personal Portfolio</div>
                    <div id='ln'>UX/ UI</div>
                </div>
                </Link>
            </span>
            </div>

            <div className='three'>
            <span class={`nav-item  ${
                  props.location.pathname === "/responsive-design" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/responsive-design">
    
                <div className='gig'><img src='/img/Image_13.png'/><img src='/img/Image_14.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Responsive Design</div>
                    <div id='ln'>UX/ UI</div>
                </div>
                </Link>
                </span>
            </div>

            <div className='four'>
            <span class={`nav-item  ${
                  props.location.pathname === "/yt-downloader" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/yt-downloader">
    
                <div className='gig'><img src='/img/Image_15.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Youtube Video Downloader</div>
                    <div id='ln'>Python App</div>
                </div>
                </Link>    
                </span>
            </div>
                <div className='space'></div>
        </div>
    );
}

export default withRouter(FourthProjects);