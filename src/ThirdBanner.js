import './ThirdBanner.css'

function ThirdBanner(){
    return(
        <div class="bannerb">
            <div class="content">
                <div class="container">
                    
                        <h2 class="text text-dark">
                            <span class="parallax-title">
                                we live in the details
                            </span>
                        </h2>
                    

                    <h2 class="text">
                        <span class="parallax-title">
                            we live in the details
                        </span>
                    </h2>
                </div>
            </div>
        </div>
        
        
    
    );
    
}

let atScroll = false;
        let parallaxTitle = document.querySelectorAll(".parallax-title");

        const scrollProgress = () => {
            atScroll = true;
        };

        const raf = () => {
            if (atScroll) {
                parallaxTitle.forEach((element, index) => {
                    element.style.transform = "translateX(" + window.scrollY / 18 + "%)";
                });
                atScroll = false;
            }
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
        window.addEventListener("scroll", scrollProgress);

export default ThirdBanner;