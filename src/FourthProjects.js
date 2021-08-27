import './FourthProjects.css';


function FourthProjects(){
    return(
        <div className='projects'>
            <div className='one'>
                <div className='gig'><img src='/img/Image_11.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Airline Booking</div>
                    <div id='ln'>Full Stack</div>
                </div>
            </div>
            <div className='two'>
            <div className='gig'><img src='/img/Image_12.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Personal Portfolio</div>
                    <div id='ln'>UX/ UI</div>
                </div>
            </div>
            <div className='three'>
                <div className='gig'><img src='/img/Image_13.png'/><img src='/img/Image_14.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Responsive Design</div>
                    <div id='ln'>UX/ UI</div>
                </div></div>
            <div className='four'>
                <div className='gig'><img src='/img/Image_15.png'/></div>
                <div className='gigname'>
                    <div id='fn'>Youtube Video Downloader</div>
                    <div id='ln'>Python App</div>
                </div></div>
                <div className='space'></div>
        </div>
    );
}

export default FourthProjects;