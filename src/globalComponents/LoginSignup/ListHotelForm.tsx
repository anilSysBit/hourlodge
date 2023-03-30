import React, { useEffect, useState } from "react";
import "../../styles/partials/loginsignup.css";
import Navigation from "../home/Navigation";
import { useFormik } from "formik";
import { Link } from "react-router-dom";



const ListHotelForm = () => {

    const PhoneForm:React.FC=()=>{
        const Pformik = useFormik<{ phone:string;}>({
          initialValues: {
            phone: "",
          },
          onSubmit: (values) => {
            setNumber(values.phone)
          },
        });
        const message = 'Hello,Welcome to OurStay Customer Care.';
        const number = '9816284342'
        const handleWhatsappClick=()=>{
          const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
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
            </div>
            <div className="form_box_container">
                <PhoneForm/>
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