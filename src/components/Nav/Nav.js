import React from "react";
import "./Nav.css";

const Nav = props => (

<nav className="navbar navbar-light bg-light">

  <div className="row">
        <div className="center col-sm-4">
        <span>Clicky Game</span>
        </div>
        <div className="center col-sm-4">
        <span>{props.message}</span>
        </div>
        <div className="center col-sm-4">
        <span>Score:</span> {props.current} <span>| Top Score:</span> {props.top}
        </div>
  </div>
</nav>
);

export default Nav;