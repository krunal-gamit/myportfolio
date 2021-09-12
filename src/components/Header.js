import React from 'react';
import { Link, withRouter } from "react-router-dom";

import "./Header.css"

function Header(props) {
    return(
        <nav class="navbar">
        <div className="header">
            <div className="logo">
                <span>kig</span>
            </div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <div className="rightHeader">
                <ul>
                    <li  class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}><Link class="nav-link" class="text-dark" to="/">HOME 
                <span class="sr-only">(current)</span>
                </Link>
                </li>

                    <li class={`nav-item  ${
                  props.location.pathname === "/playground" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/playground">PLAYGROUND
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/about">ABOUT
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-dark" to="/contact">CONTACT
                </Link>
                </li>

                </ul>
            </div>
        </div>
        </nav>
    );
}

export default withRouter(Header);