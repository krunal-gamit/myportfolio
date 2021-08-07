import './ThirdBanner.css'

function ThirdBanner(){
    return(
        <div className='bannerBack'>
            <div className='bannerTitle'>
                <div id='t1'>
                    <h1>LATEST</h1>
                <div id='t2'>
                    <h1>WORK</h1>
                </div>
                </div>
            </div>
        </div>
    );
}


let atScroll = false;
let parallaxTitle = document.querySelectorAll(".bannerTitle");

const scrollProgress = () => {
    atScroll = true;
};

const raf = () => {
    if (atScroll) {
        parallaxTitle.forEach((element, index) => {
            element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
        });
        atScroll = false;
    }
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);



export default ThirdBanner;