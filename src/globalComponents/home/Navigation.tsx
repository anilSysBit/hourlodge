import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation_container">
      <div className="logo_container">
        <h1>#OurStay Logo</h1>
      </div>
      <div className="nav_list_container">
      <ul>
        <Link to="/explore">
          <li className="line_button cut_line">explore</li>
        </Link>
        <Link to='/list-my-hotel'><li className="line_button cut_line">Accomodate your Hotel</li></Link>
        <li className="line_button cut_line">Help & Support</li>
        <Link to='/loginsignup'><li className="line_button">login / sign up</li></Link>
      </ul>
      </div>
    </div>
  );
};

export default Navigation;
