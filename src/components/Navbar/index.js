import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Bootstrap nav bar - very good on mobile
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand justify-content-end" to="/">
     <strong style = {{fontFamily:"cursive"}}>Employee Directory</strong>
    </Link>

    <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse"
      data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
        <li className="nav-item" > 
          <Link
            to="/search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          style={{float:"right"}}>
            <span id= "move-right">Search Employees</span>
          </Link>

        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
