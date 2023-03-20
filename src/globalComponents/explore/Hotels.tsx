import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import StarRateIcon from '@mui/icons-material/StarRate';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// room services
import TvIcon from '@mui/icons-material/Tv';
import CellTowerIcon from '@mui/icons-material/CellTower';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import WindPowerIcon from '@mui/icons-material/WindPower';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PoolIcon from '@mui/icons-material/Pool';

const Hotels = () => {
  return (
    <div className="explore_hotel_container">
    <div className="database_hotels_list">
      {[1,2,3,4,5,6,7,8,9,10].map((elem,index)=>{
        let imgSrc = `https://source.unsplash.com/random/350x420?sig=${index}`
        return(
          <div className="hotel_view" key={index}>
            <div className="img_box">
              <img src={imgSrc} alt="" />
            </div>
            <div className="content_box">
                <div className="description_box">
                  <div className="hotel_title category">
                    <h2>Hotel{elem} Palace <span><WorkspacePremiumIcon/>Premium</span></h2>
                  </div>
                  <div className="rating_box">
                    <StarRateIcon style={{color:'gold'}}/>
                    <StarRateIcon style={{color:'gold'}}/>
                    <StarRateIcon style={{color:'gold'}}/>
                    <StarRateIcon style={{color:'gold'}}/>
                    <StarRateIcon />({index}reviews)
                  </div>
                  <div className="location_box">
                    <p><LocationOnIcon/>location</p>
                  </div>
                  <div className="allowence_feature">
                    <ul>
                      <li><TaskAltIcon style={{color:'green'}}/>Couple</li>
                      <li><TaskAltIcon style={{color:'green'}}/>Pay Online</li>
                      <li><TaskAltIcon style={{color:'green'}}/>Any Adult Id</li>
                    </ul>
                  </div>
                  <div className="room_service">
                    <ul>
                      <li><LocalParkingIcon/></li>
                      <li><FastfoodIcon/></li>
                      <li><TvIcon/></li>
                      <li><WindPowerIcon/></li>
                      <li><WifiIcon/></li>
                      <li><KitchenIcon/></li>
                      <li><CellTowerIcon/></li>
                      <li><TvIcon/></li>
                      <li><PoolIcon/></li>
                    </ul>
                  </div>
                </div>
                <div className="discount_liner">
                    <p><WhatshotIcon/>Full Day Booking Available at : RS.0000</p>
                  </div>
                <div className="pricing_box">
                  <button className="price_button">Rs.{elem+500} <br/><span>3hrs</span></button>
                  <button className="price_button">Rs.{elem+600} <br/><span>6hrs</span></button>
                  <button className="price_button">Rs.{elem+1000} <br/><span>12hrs</span></button>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Hotels