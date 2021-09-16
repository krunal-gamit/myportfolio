import React from 'react';
import { Link, withRouter } from "react-router-dom";

import "./Header.css"
import "./FirstPage.css"

function Header(props) {
    return(
        <nav class="">
        <div className="header">
            <div className="logo">
                <img alt="kIg" src="logo-k.sv"></img>
            </div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <div className="rightHeader">
                <ul>
                    <li  class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}><Link class="nav-link" class="text-light" to="/">HOME 
                <span class="sr-only">(current)</span>
                </Link>
                </li>

                    <li class={`nav-item  ${
                  props.location.pathname === "/playground" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/playground">PLAYGROUND
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/about">ABOUT
                </Link>
                </li>
                    <li class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}><Link class="nav-link"  class="text-light" to="/contact">CONTACT
                </Link>
                </li>

                </ul>
            </div>
        </div>
        </nav>
    );
}

export default withRouter(Header);