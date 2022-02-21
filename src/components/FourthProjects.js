import './FourthProjects.css';
import { Link, withRouter } from "react-router-dom";

function FourthProjects(props){
    return(
        <div className='projects'>
            
                
            <div className='one'>
            <span class={`nav-item  ${
                  props.location.pathname === "/airline-booking" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/airline-booking">
                <div data-Aos="fade-up" className='gig'><img img alt="image" src='/img/Image_1.png'/></div>
                <div data-Aos="fade-up" className='gigname'>
                    <div id='fn'>Order Management System</div>
                    <div id='ln'>eVegetable Site</div>
                </div>
                </Link>
            </span>
            </div>

            
            <div  className='two'>
            <span class={`nav-item  ${
                  props.location.pathname === "/personal-portfolio1" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/personal-portfolio1">
    
            <div data-Aos="fade-up" className='gig'><img alt="image" src='/img/Image_11.png'/></div>
                <div data-Aos="fade-up" className='gigname'>
                    <div id='fn'>Airline Booking</div>
                    <div id='ln'>Full Stack</div>
                </div>
                </Link>
            </span>
            </div>

            <div  className='three'>
            <span class={`nav-item  ${
                  props.location.pathname === "/responsive-design" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/responsive-design">
    
                <div data-Aos="fade-up"  className='gig'><img alt="image" src='/img/Image_1.png'/><img alt="image" src='/img/Image_1.png'/></div>
                <div data-Aos="fade-up" className='gigname'>
                    <div id='fn'>Hospital Management</div>
                    <div id='ln'>CLI</div>
                </div>
                </Link>
                </span>
            </div>

            <div  className='four'>
            <span class={`nav-item  ${
                  props.location.pathname === "/yt-downloader" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/yt-downloader">
    
                <div data-Aos="fade-up" className='gig'><img alt="image" src='/img/Image_1.png'/></div>
                <div data-Aos="fade-up" className='gigname'>
                    <div id='fn'>Stock Price Prediction</div>
                    <div id='ln'>ML Model</div>
                </div>
                </Link>    
                </span>
            </div>
                <div className='space'></div>
        </div>
    );
}

export default withRouter(FourthProjects);