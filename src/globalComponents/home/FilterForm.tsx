import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Time from "../../features/Time";
import CityList from "../../features/CityList";
import fakeLogo from "../../assets/fakelogo.jpeg";
import MyDatePicker from "../../features/MyDatePicker";

interface Props {
  event: any;
}

const FilterForm = () => {
  return (
    <form
      className="filter_box_container"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <div className="filter_select">
        <img src={fakeLogo} alt="" />
      </div>
      <div className="filter_select">
        <h2 className="filter_login_signup">Login/ Signup</h2>
      </div>
      <div className="filter_select">
        <h3>City</h3>
        <CityList />
      </div>
      <MyDatePicker />
      <Time />
      <div className="filter_select">
        <Link to='/explore'>
        <button type="submit" className="global_button filter_button">
          SEARCH
        </button>
        </Link>
      </div>
      {/* <div className="filter_select login_nav_option">
        <h3>Login/signup</h3>
      </div> */}
    </form>
  );
};

export default FilterForm;
