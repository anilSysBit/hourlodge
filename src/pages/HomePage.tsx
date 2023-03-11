import React, { useState } from 'react'
import "../styles/partials/homepage.css"
import Navigation from '../components/Navigation'


const cities = [
    {name:"Chitwan"},
    {name:"Pokhara"},
    {name:"Kathmandu"},
    {name:"Dharan"},
    {name:"Butwal"},
    {name:"Chitwan"},
    {name:"Pokhara"},
]
const HomePage = () => {
    // const [currentDate,setCurrentDate] = useState();
    let newDate = new Date();
    let currentDate = newDate.toISOString().split('T')[0];
    let currentTime = newDate.toTimeString().slice(0,5);

  return (
    <div className="home_main_container">
        <div className="photo_holder_container">
            <Navigation/>
            <img src="https://th.bing.com/th/id/R.d2cdd4a6a6ed8cb699943fb2dc136e62?rik=rnPHug8q5KM%2beA&pid=ImgRaw&r=0" alt="hotelroom" />
            <div className="overlap_image_container">
                <h1>OurStay Lodges Nepal</h1>
                <h3>QuickStay with Nepal's best hourly hotel Service</h3>
                <p>Choose hotels from all major places of Nepal</p>
            </div>
            <form action='#' className="filter_box_container">
               <div className="filter_select">
                <h3>City</h3>
                <select name="city" id="nepalcity">
                    {
                        cities.map((elem,index)=>{
                            return(
                                    <option key={index} value={elem.name}>{elem.name}</option>
                            )
                        })
                    }
                </select>
               </div>
               <div className="filter_select">
                <h3>Date</h3>
                <input type="date" className="datetime" min={currentDate}/>
               </div>
               <div className="filter_select">
                <h3>Time</h3>
                <input type="time" className="datetime" step={60} min={currentTime}/>
               </div>
               <div className="filter_select">
                <button type='submit'>SEARCH</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default HomePage