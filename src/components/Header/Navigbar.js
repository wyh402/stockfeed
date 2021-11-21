import React from "react";
import "./Navigbar.css"

function Navigbar(props) {
  return (
    <div className="navbar-container">
      <div className="navbar-button-container">
        <a className="navbar-button" id="seed">SEED</a>
      </div>
      <div className="navbar-button-container">
      <a className="navbar-button" id="profits">PROFITS</a>
      </div>
      <div className="navbar-button-container">
        <a className="navbar-button" id="others">OTHERS</a>
      </div>
    </div>
  );
}

export default Navigbar;