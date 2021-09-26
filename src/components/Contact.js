import React from "react";
import "./Contact.css"


function Contact() {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            backgroundColor: color,
            height: 0.1,
            opacity:0.4
        }}
    />
);
  return (
    <div className="contact">
      
      <div className="contactText">
          <span id="cText">
          <p>The internet is not waiting for a new website.<br/> Let's come up with a solution. <br/>Feel free to contact.</p>
          </span>
      </div>

      <ColoredLine color="white"/>
      <div class="marquee">
  <div class="track">
    <div class="content">
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.instagram.com/krunalgamit_">INSTAGRAM </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://twitter.com/krunalgamit_">TWITTER </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.facebook.com/krooksgeek">FACEBOOK </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://github.com/krooksgeek">GITHUB</a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/">LINKEDIN </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="mailto:krooksgeek@gmail.com">KROOKSGEEK@GMAIL</a></span>

      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.instagram.com/krunalgamit_">INSTAGRAM </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://twitter.com/krunalgamit_">TWITTER </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.facebook.com/krooksgeek">FACEBOOK </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://github.com/krooksgeek">GITHUB</a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="https://www.linkedin.com/in/krunal-gamit/">LINKEDIN </a></span>
      <span><a id="aboutArr"> &#8594;</a> <a target="_blank" href="mailto:krooksgeek@gmail.com">KROOKSGEEK@GMAIL</a></span>

    </div>
  </div>
</div>
<ColoredLine color="white"/>
<div className="spacing"></div>
    </div>
  );
}

export default Contact;