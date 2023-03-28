import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation_container">
      <ul>
        <Link to="/explore">
          <li className="line_button cut_line">explore</li>
        </Link>
        <li className="line_button cut_line">Accomodate your Hotel</li>
        <li className="line_button cut_line">Help & Support</li>
        <Link to='/loginsignup'><li className="line_button">login / sign up</li></Link>
      </ul>
    </div>
  );
};

export default Navigation;
