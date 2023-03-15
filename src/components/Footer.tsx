import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';


const Footer = () => {

  return (
    <div className="footer_container">
      <div className="footer_internal_container">
        <div className="left_description_container">
          <div className="data_description">
            <h1>#OurStay</h1>
            <p>"Our hourly hotel service offers guests the convenience of booking a hotel room for just the hours they need, whether it's for a quick nap, a meeting, or a rest between flights."Our hourly hotel service is designed to offer guests the ultimate flexibility and convenience when it comes to booking a hotel room. Whether it's for a quick power nap, a meeting, a layover, or simply a few hours of relaxation, our service allows guests to book a room for as little as one hour or as long as they need. With our easy-to-use online booking platform, guests can choose from a range of hotel rooms at competitive rates and enjoy access to all the amenities and services offered by the hotel. For hoteliers, our service provides a new revenue stream by utilizing vacant rooms during off-peak hours and attracting a new demographic of customers who may not need an overnight stay.</p>
          </div>
          <div className="social_media">
            <h3>follow us</h3>
            <ul>
              <li><FacebookIcon style={{fontSize:'40px'}}/></li>
              <li><InstagramIcon style={{fontSize:'40px'}}/></li>
              <li><TwitterIcon style={{fontSize:'40px'}}/></li>
              <li><LinkedInIcon style={{fontSize:'40px'}}/></li>
              <li><YouTubeIcon style={{fontSize:'40px'}}/></li>
            </ul>
          </div>
        </div>
        <div className="right_details_container">
          <div className="page_links">
            <ul>
              <li>Contact us</li>
              <li>Our blogs</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Apply for Job</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="list_your_hotel">
            <h3>Do you want to accomodate your hotel?</h3>
            <p>Our hourly hotel service is the best way to attract new customers and increase your business revenue by making use of vacant rooms during off-peak hours.</p>
            <button>ADD YOUR HOTEL <AddHomeWorkIcon style={{fontSize:'30px',position:'absolute',right:'10px'}}/></button>
          </div>
          <div className="payment_channels">
            <h3>Payment Partners</h3>
            <img src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111" alt="" />
            <img src="https://www.enepsters.com/wp-content/uploads/2018/03/Khalti-logo-570x300.jpg" alt="khalti" />
            <img src="https://broadwayinfosys.com/assets/images/imepay.png" alt="imepay" />
            <img src="https://th.bing.com/th/id/OIP.TQkOkUCjNbd_NTUKFq-9QAHaCB?pid=ImgDet&rs=1" alt="paypal" />
          </div>
          .
        </div>
      </div>
      <h3 className='copyright_text'>Copyright@ 2023 All rights Reserved</h3>
    </div>
  )
}

export default Footer