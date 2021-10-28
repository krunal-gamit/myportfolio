import React from "react";
import "./About.css"
import SixthMeet from "./SixthMeet";

function About() {
  return (
    <div className="about">
      <div className="about-me">
        <div className="aboutName">
            <span id="name">Krunal Gamit</span>
        </div>
        <div className="aboutText">
            <span id="abt-One">
            I'm currently pursuing B.Tech Computer Science &#38; Engineering degree at Nirma University, Ahmedabad.
            I love designing and developing web applications, 
            I work on it till it becomes cool stuff. Apart from software, I like music. 
            I'm quite an intermediate guitarist.
            </span>
            <span id="abt-Two">
            I have a passion for developing better solutions and user experience that are impactful.
            </span>
            
            <span id="resume">
              <a target="_blank" href="https://drive.google.com/file/d/1c3c_m4si6Rp_wbyy8XjylV1TzMO_Dw58/view?usp=sharing">
              <button  className="button1">RESUME</button>
              </a>
              </span>
        </div>
        </div>
      
      <div className="toolsSec">
        <span id="toolTitle">Tech &#38; Tools</span>
        <div id="tools">
          <span className="toolrow">
                <ul>
                  <li>Java</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>Reactjs</li>
                  <li>Framer Motion</li>
                </ul>
                <ul>
                  <li>Spline</li>
                  <li>Adobe XD</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>After Effects</li>
                  <li>Premier Pro</li>
                </ul>
                <ul>
                  <li>Git</li>
                  <li>Heroku</li>
                  <li>Metlify</li>
                  <li>Docker</li>
                  <li>Google Cloud</li>
                </ul>
          </span>
        </div>
      </div>


      <div className="toolsSec">
        <span id="toolTitle">Current Favorites</span>
        <div id="tools2">
          <span className="toolrow2">
                <ul>
                  <li>Programming Language</li>
                  <li>Editor</li>
                  <li>Version Control</li>
                  <li>Design Framework</li>
                  <li>Design Tool</li>
                  <li>Fonts</li>
                  <li>UX/UI Inspiration</li>
                  
                </ul>
                <ul>
                  <li>Java</li>
                  <li>Vim, VS Code, Sublime</li>
                  <li>Git, github</li>
                  <li>Reactjs</li>
                  <li>XD, Figma</li>
                  <li>Codec, SF Pro Display, GT Super Display, Raleway</li>
                  <li>Awwwards</li>
                </ul>
          </span>
        </div>
      </div>

      <SixthMeet/>
      <div className="space"></div>
    </div>
  );
}

export default About;