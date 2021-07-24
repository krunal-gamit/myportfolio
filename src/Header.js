import React from 'react';
import "./Header.css"

function Header() {
    return(
        <div className="header">
            <div className="logo">
                <h4>k_g</h4>
            </div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            
            <div className="rightHeader">
                <ul>
                    <li><a href="/#">HOME</a></li>
                    <li><a href="/#">PLAYGROUND</a></li>
                    <li><a href="/#">ABOUT</a></li>
                    <li><a href="/#">CONTACT</a></li>
                </ul>
            </div>
        </div>
        
    );
}

export default Header;