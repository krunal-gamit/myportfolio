import React from "react";
import "./Projects.css"


const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 0.1,
          opacity: 0.4,
          marginLeft:70,
          marginRight:70
      }}
  />
);


function ProjectOne() {
  return (
    <div className="airline-booking">
      <div class="projectPage">
        <div className="proTitle">
          <div className="smallTitle">
            <span id="sTitle">Full Stack</span>
          </div>
          <span id="pTitle">Airline Management System</span>
        </div>
        <div className="proImage">
        </div>

        <div className="proDesc">
          <span>Airline Management System which provides a platform to manage ticket booking, 
track flight status, manage customer and Employee accounts.  Take feedback and record 
complaints, and management of companys' resources. </span>
        </div>


        <div className="proDate">
          <span id="title">Project Date</span>
          <span id="date">Oct 2020</span>
        </div>

      <ColoredLine color="white"/>

      <div className="role">
        <span id="roleName">Role</span>
          <span id="roleDesc">Airline Management System which provides a platform to manage ticket booking, 
track flight status, manage customer and Employee accounts.  Take feedback and record 
complaints, and management of companys' resources. </span>
        </div>

        <div className="research">
        <span id="resName">Research & Planning</span>
          <span id="resDesc">Airline Management System which provides a platform to manage ticket booking, 
track flight status, manage customer and Employee accounts.  Take feedback and record 
complaints, and management of companys' resources. </span>
        </div>

      </div>
    </div>
  );
}

export default ProjectOne;