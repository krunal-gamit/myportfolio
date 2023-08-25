import React from "react";
import "./Playground.css"
import FourthProjects from "./FourthProjects";
import SixthMeet from "./SixthMeet";
import Animation from "./Animation";


function Playground() {


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
    <div className="playground">
      <div className="playgroundPage">
        <div className="playTitle">
          <span id="pTitle">Playground</span>
        </div>
        <div className="playText">
          <span id="pText">"less talking and more doing"
          <br/>A collection of dev. and designs. 
          Mix of practice and side projects.</span>
        </div>
        <Animation/>
        
        <div className="space"></div>
      </div>
    </div>
  );
}

export default Playground;