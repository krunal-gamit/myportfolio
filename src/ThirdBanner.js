import './ThirdBanner.css'

function ThirdBanner(){


    let atScroll = false;
            let parallaxTitle = document.querySelectorAll(".parallax-title");

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



    return(
        <div class="smooth-scroll-wrapper">
            <div class="content1">
                <div class="container1">
                    
                        <h2 class="text1 text-dark1">
                            <span class="parallax-title">
                                we live in the details
                            </span>
                        </h2>
                    

                    <h2 class="text1">
                        <span class="parallax-title">
                            we live in the details
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
}


export default ThirdBanner;