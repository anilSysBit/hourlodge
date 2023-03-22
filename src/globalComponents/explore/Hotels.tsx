import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HotelFeature from "./HotelFeature";
import { Link,useNavigate } from "react-router-dom";

const Hotels = () => {
  const navigate = useNavigate();
  return (
    <div className="explore_hotel_container">
      <div className="database_hotels_list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, index) => {
          let imgSrc = `https://source.unsplash.com/random/350x420?sig=${index}`;
          return (
            <div className="hotel_view" key={index}>
              <div className="img_box">
                <img src={imgSrc} alt="" />
              </div>
              <div className="content_box">
                <div className="description_box">
                  <div className="hotel_title category">
                    <h2 onClick={()=>navigate(`/booking/${index+1}`)}>
                      Hotel{elem} Palace{" "}
                      <span>
                        <WorkspacePremiumIcon />
                        Premium
                      </span>
                    </h2>
                  </div>
                  <HotelFeature />
                </div>
                <div className="discount_liner">
                  <p>
                    <WhatshotIcon />
                    Full Day Booking Available at : RS.0000
                  </p>
                </div>
                <div className="pricing_box">
                  <button className="price_button">
                    Rs.{elem + 500} <br />
                    <span>3hrs</span>
                  </button>
                  <button className="price_button">
                    Rs.{elem + 600} <br />
                    <span>6hrs</span>
                  </button>
                  <button className="price_button">
                    Rs.{elem + 1000} <br />
                    <span>12hrs</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
