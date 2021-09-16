import React from "react";
import "./About.css"

function About() {
  return (
    <div className="about">
      <div class="container">
        <div className="aboutName">
            <span id="name">Krunal Gamit</span>
        </div>
        <div className="aboutText">
            <span id="abt-One">
            I'm currently pursuing B.Tech Computer Science &#38; Engineering degree at Nirma University, Ahmedabad.
I love designing and developing web applications, I work on it till it becomes cool stuff. Apart from software, I like music. I'm quite an intermediate guitarist.
            </span>
            <span id="abt-Two">
            I have a passion for developing better solutions and user experience that are impactful.
            </span>
            
            <span id="resume"><button className="button1">RESUME</button></span>
        </div>

      
      <div className="toolsSec">
        <span id="toolTitle">Tech &#38; Tools</span>
        <span id="tools">
          <span className="toolrow">
                <ul>
                  <li>Java</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>Git</li>
                  <li>Heroku</li>
                  <li>HTML</li>
                  <li>CSS</li>
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

          </span>
        </span>
      </div>

      </div>
    </div>
  );
}

export default About;