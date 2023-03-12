import React, { useState } from 'react'
import "../styles/partials/homepage.css"
import Navigation from '../components/Navigation'
import SearchByPlace from '../components/SearchByPlace'
import OurFeatures from '../components/OurFeatures'
import Qualities from '../components/Qualities'
import Footer from '../components/Footer'
import UserTabulation from '../components/UserTabulation'
import PopopMessage from '../features/PopopMessage'


const cities = [
    { name: "Chitwan" },
    { name: "Pokhara" },
    { name: "Kathmandu" },
    { name: "Dharan" },
    { name: "Butwal" },
    { name: "Chitwan" },
    { name: "Pokhara" },
]
const HomePage = () => {
    // const [currentDate,setCurrentDate] = useState();
    const [pop,setPop] = useState(true);
    let newDate = new Date();
    let currentDate = newDate.toISOString().split('T')[0];
    let currentTime = newDate.toTimeString().slice(0, 5);
    const screen =()=> setPop(false);
    return (
        <>
            <div className="home_main_container">
                {pop ? <PopopMessage screen={screen}/> : null}
                <div className="photo_holder_container">
                    <Navigation />
                    <img src="https://th.bing.com/th/id/R.d2cdd4a6a6ed8cb699943fb2dc136e62?rik=rnPHug8q5KM%2beA&pid=ImgRaw&r=0" alt="hotelroom" />
                    <div className="overlap_image_container">
                        <h1>OurStay Lodges Nepal</h1>
                        <h3>QuickStay with Nepal's best hourly hotel Service</h3>
                        <p>Choose hotels from all major places of Nepal</p>
                        <button className='hover_color'>About US</button>
                    </div>
                    <form action='#' className="filter_box_container">
                        <div className="filter_select">
                            <h3>City</h3>
                            <select name="city" id="nepalcity">
                                {
                                    cities.map((elem, index) => {
                                        return (
                                            <option key={index} value={elem.name}>{elem.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="filter_select">
                            <h3>Date</h3>
                            <input type="date" className="datetime" min={currentDate} />
                        </div>
                        <div className="filter_select">
                            <h3>Time</h3>
                            <input type="time" className="datetime" step={60} min={currentTime} />
                        </div>
                        <div className="filter_select">
                            <button type='submit'>SEARCH</button>
                        </div>
                    </form>
                </div>
            </div>
            <SearchByPlace />
            <OurFeatures />
            <div className="ads_container"></div>
            <div className="mobile_app_container">
                <img className='mobile' src="https://www.freepngimg.com/thumb/iphone_7/68698-vector-painted-smartphone-iphone-apple-png-free-photo.png" alt="mobile" />
                <span>
                    <h1>Mobile App in Production</h1>
                    <br />
                    <h3>Coming Soon.......</h3>
                </span>
                <img className='play_store' src="https://th.bing.com/th/id/R.b529c865909767cbf889c83d4b06e01f?rik=SINPOJS%2fBcg6AQ&pid=ImgRaw&r=0" alt="playapplestore" />

            </div>
            <div className="ads_container"></div>
            <Qualities />
            <div className="ads_container"></div>
            <UserTabulation />
            <div className="ads_container"></div>
            <Footer/>
        </>
    )
}

export default HomePage