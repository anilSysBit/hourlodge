import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/partials/homepage.css";
import Navigation from "../globalComponents/home/Navigation";
import SearchByPlace from "../globalComponents/home/SearchByPlace";
import OurFeatures from "../globalComponents/home/OurFeatures";
import Qualities from "../globalComponents/home/Qualities";
import UserTabulation from "../globalComponents/home/UserTabulation";
import FAQ from "../globalComponents/home/FAQ";
import FilterForm from "../globalComponents/home/FilterForm";

const HomePage = () => {
  // const [currentDate,setCurrentDate] = useState();

  const [croll, setCroll] = useState(0);
  const handleScroll = () => {
    setCroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="home_main_container">
        <div className="photo_holder_container">
          <Navigation />
          <img
            src="https://th.bing.com/th/id/R.d2cdd4a6a6ed8cb699943fb2dc136e62?rik=rnPHug8q5KM%2beA&pid=ImgRaw&r=0"
            alt="hotelroom"
          />
          <div className="overlap_image_container">
            <h1>OurStay Lodges Nepal</h1>
            <h3>QuickStay with Nepal's best hourly hotel Service</h3>
            <p>Choose hotels from all major places of Nepal</p>
            <a href="#aboutus">
              <button className="hover_color global_button">About US</button>
            </a>
            <span id="top"></span>
          </div>
        </div>
      </div>
      <div className="homepage_filter_container"
        id="filter"
        onClick={() => {
          if (croll < 600) {
            window.scrollTo({ top: 500, behavior: "smooth" });
          }
        }}
      >
        <style>{`
                ${
                  croll > 600
                    ? `
                    .homepage_filter_container{
                      position:fixed;
                      top:0;
                      width:100%;
                      height:100px;
                      border-radius:0;
                  }
                  .
                  .homepage_filter_container .filter_box_container{
                    position:absolute;
                    left:0;
                  }
  
                    .homepage_filter_container .ourstay_calendar{
                        top:calc(100% + 60px);
                    }
                    .homepage_filter_container .time_container{
                        top:calc(100% + 5px);
                    }
                    
                `
                    : `
                    .homepage_filter_container .filter_box_container .filter_select img{
                      display:none;
                    }
                    .homepage_filter_container .filter_box_container .filter_select .filter_login_signup{
                      display:none;
                    }

                `
                }
            `}</style>
        <FilterForm />
      </div>
      <SearchByPlace />
      <OurFeatures />
      <div className="ads_container"></div>
      <div className="mobile_app_container">
        <img
          className="mobile"
          src="https://www.freepngimg.com/thumb/iphone_7/68698-vector-painted-smartphone-iphone-apple-png-free-photo.png"
          alt="mobile"
        />
        <span>
          <h1>Mobile App in Production</h1>
          <br />
          <h3>Coming Soon.......</h3>
        </span>
        <img
          className="play_store"
          src="https://th.bing.com/th/id/R.b529c865909767cbf889c83d4b06e01f?rik=SINPOJS%2fBcg6AQ&pid=ImgRaw&r=0"
          alt="playapplestore"
        />
      </div>
      <div className="ads_container"></div>
      <Qualities />
      <div className="ads_container"></div>
      <UserTabulation />
      <div className="ads_container"></div>
      <FAQ />
      <div className="ads_container"></div>
    </>
  );
};

export default HomePage;
