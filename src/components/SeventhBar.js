import './SeventhBar.css'

function SeventhBar(){
    return(
        <div className='bar'>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='minBar'>
                <div className='barText'>
                    <span><span id="downArrow">&#859;</span></span>
                </div>
            </div>
        </div>
    );
}

export default SeventhBar;