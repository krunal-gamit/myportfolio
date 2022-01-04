import './Four3D.css'

function Four3D(){
    return(
        
       <div className='mainBody'>
           <section>
               <div className='perspective containerr'>
               <div className=' grid grid--columns'>
                   <div>
            <h2 className='fs-700 uppercase text-compressed'>INSTAGRAM FEED</h2>
            <p>The feed will smoothly transition into the next.<br/>Images vertically and horizontally look connected.<br/> Inspired by Casey McPerry (@caseymcperry). </p>
            <div className='contain'>
            <div className='flex large-gap '>
                <a target='_blank' href='https://instagram.com/krunalgamit_' className='btn btn--primary uppercase text-compressed'>VISIT PROFILE</a>
                <a href='/' className='btn btn--accent uppercase'><img src="/img/11.jpg"></img></a>
            </div>
            </div>
            </div>
            </div>

            <div className='grid feature-grid'>
                <a target="_blank" href='https://www.instagram.com/p/CP_WwnKhDns/' aria-label='check'><img src="/img/1.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/CIQ-GEfhm8n/'aria-label=''><img src="/img/2.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/B9Pa2B7hlIf/'aria-label=''><img src="/img/3.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/B6vevekHgN0/'aria-label=''><img src="/img/4.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/B29yS_OgJrn/'aria-label=''><img src="/img/5.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/B2R2hUwHx03/'aria-label=''><img src="/img/6.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/B0n5ZbugtTw/'aria-label=''><img src="/img/7.jpg"></img></a>
                <a target="_blank" href='https://www.instagram.com/p/BxlHNm0HGkg/'aria-label=''><img src="/img/8.jpg"></img></a>
            </div>

            </div>
           </section>
       </div>
    );
}

export default Four3D;