import React, { useState, useEffect } from "react";
import { Container, Title, Ul, Cursor } from "./StyledAnimation";
import { menuData } from './menuData.js';

const Animation = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            backgroundColor: color,
            height: 0.1,
            opacity:0.5,
            zIndex:0,
        }}
    />
);

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container> 
      <Ul>
        {menuData.map((elem, i) => (
          <li key={i}>
            <span >{elem.name}</span>
            
            <div className='img-cont'>
              <img src={elem.img} alt={elem.name} />
            </div>
            <ColoredLine color="white"/>
          </li>
        ))}
      </Ul>
       
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="cursor"
      ></div>
    </Container>
  );
};

export default Animation;