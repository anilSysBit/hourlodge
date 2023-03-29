import React from "react";
import SmartFilter from "../features/SmartFilter";
import Hotels from "../globalComponents/explore/Hotels";
import FilterForm from "../globalComponents/home/FilterForm";
import '../styles/partials/explore.css'

const Explore = () => {
  return (
    <div className="explore_main_container">
      <div className="explore_navigation_container adjust_global_width">
        <FilterForm />
      </div>
        <div className="explore_filter_container">
          <SmartFilter />
        </div>
      <div className="explore_body_container">
        <Hotels/>
      </div>
    </div>
  );
};

export default Explore;
