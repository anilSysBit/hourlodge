import React from 'react'
import { Tv,
         CellTower,
         Kitchen, 
         Wifi, 
         WindPower, 
         LocalParking, 
         Fastfood, 
         Pool,
         TaskAlt,
         StarRate,
         LocationOn 
        } from '@mui/icons-material';

const HotelFeature = () => {
  return (
    <div className='icons_store'>
        <div className="rating_box">
        <StarRate style={{color:'gold'}}/>
        <StarRate style={{color:'gold'}}/>
        <StarRate style={{color:'gold'}}/>
        <StarRate style={{color:'gold'}}/>
        <StarRate />({0}reviews)
        </div>
        <div className="location_box">
        <p><LocationOn/>location</p>
        </div>
        <div className="allowence_feature">
        <ul>
            <li><TaskAlt style={{color:'green'}}/>Couple</li>
            <li><TaskAlt style={{color:'green'}}/>Pay Online</li>
            <li><TaskAlt style={{color:'green'}}/>Any Adult Id</li>
        </ul>
        </div>
        <div className="room_service">
        <ul>
            <li><LocalParking/></li>
            <li><Fastfood/></li>
            <li><Tv/></li>
            <li><WindPower/></li>
            <li><Wifi/></li>
            <li><Kitchen/></li>
            <li><CellTower/></li>
            <li><Pool/></li>
        </ul>
        </div>
    </div>
  )
}

export default HotelFeature