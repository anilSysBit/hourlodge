import React, { useEffect, useState } from "react";
import "../../styles/partials/loginsignup.css";
import Navigation from "../home/Navigation";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import img2 from '../../assets/gmap1.jpg'
import img3 from '../../assets/gmap2.jpg'
import img1 from '../../assets/gmap3.jpg'

interface HotelList{
  phone:string;
  hotelLocation:string;
}

const ListHotelForm = () => {

    const PhoneForm:React.FC=()=>{
        const Pformik = useFormik<HotelList>({
          initialValues: {
            phone: "",
            hotelLocation:"",
          },
          onSubmit: (values) => {
            console.log(values)
          },
        });
        const message = 'Hello,How can I register for this service?';
        const number = '9816284342'
        const name = 'OurStay Customer Care'
        const handleWhatsappClick=()=>{
          const url  = `https://wa.me/${number}?text=${encodeURIComponent(message)}&name=${encodeURIComponent(name)}`;
          if(number){
            window.open(url);
          }
        }
    
        return(
          <form
          action="#"
          onSubmit={Pformik.handleSubmit}
        >
          <div className="hour_form_control">
            <label htmlFor="email"> Phone Number</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter phone......."
                onChange={Pformik.handleChange}
                onBlur={Pformik.handleBlur}
                value={Pformik.values.phone}
                required
              />
          </div>
          <div className="hour_form_control">
            <label htmlFor="goglurl">Share Google Map Location Address</label>
              <input
                type="url"
                name="hotelLocation"
                placeholder="https://goo.gl/maps/.."
                onChange={Pformik.handleChange}
                onBlur={Pformik.handleBlur}
                value={Pformik.values.hotelLocation}
                required
              />
          </div>
          <div className="hour_form_control button_control">
            <p>Our company officials will be visiting your location soon to discuss and finalize the registration</p>
            <button className="global_button login_signup" type="submit">Visit and Register</button>
            <button className="global_button login_signup" type="submit" onClick={handleWhatsappClick}>Discuss in Whatsapp Customer Care</button>
          </div>
        </form>
        )
      }
  return (
    <div className="list_hotel_container">
      <div className="login_signup_container">
        <div className="navigation_container">
          <Navigation />
        </div>
        <div className="login_main_container">
          <div className="form_container">
            <div className="login_title_container">
              <h1>List Your Hotel OR<br/> Login as Hoteiler</h1>
              <h2>
              Sell your hotel rooms online with hourly rates by joining Hourstay with flexible and affordable accomodation options
              </h2>
              <button className="global_button hotel_button">Login As Hoteiler</button>
            </div>
            <div className="form_box_container">
                <PhoneForm/>
            </div>
          </div>
        </div>
        <div className="how_to_send_location">
            <h1>How to share Google Map Location Address??</h1>
            <div className="answer_preview">
              <ul>
                <li><h3>Step 1 : Go to Google Maps <a onClick={()=>window.open("https://google.com/maps")}>Click Here</a></h3></li>
                <li><h3>Step 2 : Search Your Hotel On Maps</h3></li>
                <li><h3>Step 3 : Click On Share of Your Hotel</h3></li>
                <li><h3>Step 4 : Click on Copy to Clickboard</h3></li>
                <li><h3>Step 5 : Paste on field of the form</h3></li>
              </ul>
              <div className="img_container">
              <img src={img1}alt="map1" className="img1"/>
              
              </div>
              <div className="img_container">
              <img src={img2}alt="map2" className="img2"/>
              </div>
              <div className="img_container">
              <img src={img3}alt="map2" className="img3"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ListHotelForm;

{/* <div className="list_yourself">
<h2>List your Hotel Yourself</h2>
<button className="global_button login_signup">List Yourself</button>
</div>
<div className="customer_care_listing">
<h2>Use Customer Care Service to List on Whatsapp</h2>
<button className="global_button login_signup">Whatsapp service</button>
</div> */}