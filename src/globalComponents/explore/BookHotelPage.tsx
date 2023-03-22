import React from "react";
import { useParams } from "react-router";
import FilterForm from "../home/FilterForm";
import { Link } from "react-router-dom";
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
  LocationOn,
  CurrencyExchange,
  AssignmentInd,
  Group,
  
 } from '@mui/icons-material';

const BookHotelPage = () => {
  const fetchedData = {
    name: "Hotel Royal Palace",
    city: "chitwan",
    hotelID:'898977733',
    province:3,
    location: "Sauraha",
    description:"this is the best hotel in sauraha with very good price",
    googleLocation:'https://goo.gl/maps/LRcSKXweV95afRC48',
    googleIframeLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4867235291795!2d84.49773011513534!3d27.578435882845472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994eee0c396e0ad%3A0xdc39cef896029989!2sHotel%20National%20Park%20Sauraha!5e0!3m2!1sen!2snp!4v1679504826595!5m2!1sen!2snp",
    rating: 4,
    imgSrc:{
        wide:'https://th.bing.com/th/id/R.fb071770f83d99469698c26ea165e01e?rik=L8MdZnhhE4eonA&riu=http%3a%2f%2fmedia.architecturaldigest.com%2fphotos%2f57e42deafe422b3e29b7e790%2fmaster%2fpass%2fJW_LosCabos_2015_MainExterior.jpg&ehk=T5IeAh1xUTXOGrbKtfbg8dJDabe5Nquu660Eh3%2bi%2bdY%3d&risl=&pid=ImgRaw&r=0',
        face:'https://th.bing.com/th/id/R.ff1b52d23e502342d2bfc8ae9846b418?rik=Bf%2fnzyygQyo57g&pid=ImgRaw&r=0',
        room:'https://th.bing.com/th/id/OIP.bUFpr9T89Bu-04biIHylCAHaE8?pid=ImgDet&rs=1',
        dining:'https://th.bing.com/th/id/R.675c1cdbadd6b1597fa106d681e8f314?rik=dkMQi2%2bTE6v02w&pid=ImgRaw&r=0',
        bathroom:'https://th.bing.com/th/id/R.60f807ddccb5ebc3a3e53fe8c9680b1c?rik=Qyu%2b5WXQWdHSLg&pid=ImgRaw&r=0',
        swimming:'https://th.bing.com/th/id/R.45b93ef56d207c17a20e9b7a589e6369?rik=xyAawHeALmLTnA&pid=ImgRaw&r=0',
    },
    acceptance: {
      couple: true,
      pay_online: true,
      id_required: true,
      unmarried:true
    },
    roomFeatures: {
      parking: true,
      ac: true,
      water: true,
      geysar: false,
      tv: true,
      wifi: true,
      freezer: false,
      diningTable: true,
      cctv: true,
      lift: false,
      laundry:true,
      gym:false,
    },
  };
  const {
    name,
    city,
    province,
    imgSrc,
    location,
    googleIframeLink,
    rating,
    description,
    acceptance,
    googleLocation,
    roomFeatures
  } = fetchedData;
  const { id } = useParams();
  return (
    <div className="book_hotel_container explore_main_container">
      <style>{`

        `}</style>
      <div className="explore_navigation_container adjust_global_width">
        <FilterForm />
      </div>
      <div className="book_hotel_internal_container">
        <div className="header_container">
          <h1>{name}</h1>
        </div>
        <div className="city mg_20">
          <h2>{city}</h2>
          <h3><LocationOn/>{location}</h3>
        </div>
        <div className="rating_box mg_20">
        <StarRate style={{color:'#d0af0c'}}/>
        <StarRate style={{color:'#d0af0c'}}/>
        <StarRate style={{color:'#d0af0c'}}/>
        <StarRate style={{color:'#d0af0c'}}/>
        <StarRate />({0}reviews)
        </div>
        <div className="image_box">
          <img src={imgSrc.wide} alt="" />
          <img src={imgSrc.room} alt="" />
          <img src={imgSrc.bathroom} alt="" />
          <img src={imgSrc.swimming} alt="" />
        </div>
        <div className="acceptance_box">
          <div className="couple acceptance_internal">
            <h3><Group/>Couple Accepted</h3>
            <p>Any Married and Unmarried Couple are accepted and You gurantee to provide with your security.</p>
          </div>
          <div className="payment_system acceptance_internal">
            <h3><CurrencyExchange/>Only Online Payment</h3>
            <p>Should Pay With Online Serivce esewa, mobile Banking , Esewa, Ime Pay</p>
          </div>
          <div className="goverment_id acceptance_internal">
            <h3><AssignmentInd/>Any Goverment Adult Id Accepted</h3>
            <p>Liscence, Citizenship, Passport, Identity</p>
          </div>
        </div>
        <div className="features_box">
          <h2>Our Service</h2>
        <ul>
            <li><LocalParking/> Parking</li>
            <li><Fastfood/> Food and Snacks</li>
            <li><Tv/> TV Serive</li>
            <li><WindPower/> Fan</li>
            <li><Wifi/> Fast Wifi</li>
            <li><Kitchen/> Freezer</li>
            <li><CellTower/> Mobile Network</li>
            <li><Pool/> Swimming Pool</li>
            <li>AC</li>
            <li>Geyser</li>
            <li>CCTV</li>
            <li>Room Service</li>

        </ul>
        </div>
        <div className="ads_container"></div>
        <div className="google_map_directions">
          <iframe src={googleIframeLink} width="100%" height="450"  loading="lazy"></iframe>
        </div>
        <div className="ads_container"></div>
        <div className="hotel_state_description">
          <div className="policy_details hotel_policy">
            <h1>Lodge Policy</h1>
            <ul>
              <li>Identification requirement: Guests must provide a valid government-issued photo identification, such as a passport or driver's license, at check-in. Photocopies or digital copies of identification documents are not accepted.</li>
              <li>Age requirement: To check in to our hotel, guests must be at least 18 years old and provide a valid form of identification confirming their age.</li>
              <li>No smoking policy: Smoking is strictly prohibited in all areas of the hotel, including guest rooms, common areas, and outdoor spaces. Violators may be fined and evicted from the hotel.</li>
              <li>Noise policy: Guests are expected to keep noise levels to a minimum at all times, particularly between the hours of 10pm to 7am. Disruptive guests may be asked to leave the hotel without refund.</li>
              <li>Payment policy: Guests must provide a valid credit or debit card at check-in to cover any incidental charges or damages. Cash payments are accepted, but a valid credit card must still be provided for incidentals.</li>
            </ul>
          </div>
          <div className="cancel_order_policy hotel_policy">
            <h1>Refund and Cancellation</h1>
            <ul>
              <li>Cancellation policy: Guests must cancel their reservation within a specified time frame to avoid being charged for the first night's stay. The time frame varies depending on the room type and rate selected.</li>
              <li>Advance notice: Guests must provide at least 24 hours' advance notice of cancellation to avoid a cancellation fee.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHotelPage;

