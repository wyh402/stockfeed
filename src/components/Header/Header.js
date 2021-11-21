import React from "react";
import Navigbar from "./Navigbar"
import Login from "./Login"

import "./Header.css"

function Header(props) {
  return (
    <div className="container">
        <div className="logo-container">
            <a href="#"><img className="logo" src="StockFeed.png"/></a>
        </div>
        <div className="nav-container">
            <Navigbar></Navigbar>
        </div>
        <div className="login-container">
            <Login></Login>
        </div>
    </div>
  );
}

export default Header;