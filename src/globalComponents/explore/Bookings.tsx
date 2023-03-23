import React, { useEffect, useState } from "react";
import { RoomService, SaveAs } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Time from "../../features/Time";
import MyDatePicker from "../../features/MyDatePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Bookings = () => {
  const [showBook, setShowBook] = useState(false);
  const [enableGuests, setEnableGuests] = useState(false);
  const [price, setPrice] = useState(500);
  const [roomData, setRoomData] = useState({
    guests: 2,
    rooms: 1,
    children: 0,
    adults: 2,
  });
  const fetchPrice = {
    three: 500,
    six: 900,
    twelve: 1400,
    t4: 2400,
  };

  const guestMapData = [
    {
      title: "rooms",
      value: roomData.rooms,
      iso:0,
    },
    {
      title: "adults",
      value: roomData.adults,
      iso:1,

    },
    {
      title: "children",
      value: roomData.children,
      iso:2
    },
  ];

  const total_price = price * roomData.rooms;
  const scroll = useSelector((state: RootState) => {
    return state.screen.scrollWidth;
  });
  const handleBookingBox = () => {
    if (scroll < 790) {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }else{
      setShowBook(!showBook)
    }
  };

  const handlePriceButton = (price: number) => {
    setPrice(price);
  };

  const  handleEditClick =(num:number,iso:number)=>{
    if(iso == 0){
      setRoomData((prev)=>{
        return{
          ...prev,
          rooms:num && prev.rooms > 0 ? prev.rooms +1 : prev.rooms < 0 ? prev.rooms - 1 :prev.rooms
        }
      })
    }else if(iso == 1){
      setRoomData((prev)=>{
        return{
          ...prev,
          adults:num && prev.adults <8 ? prev.adults +1 : prev.adults >1 ? prev.adults - 1 : prev.adults
        }
      })
    } else if(iso == 2){
      setRoomData((prev)=>{
        return{
          ...prev,
          children:num && prev.children < 4 ? prev.children +1 : prev.children >0?prev.children - 1:prev.children
        }
      })
    }
  }

  const makeRooms=(data:number)=>{
    let count = 0;
    for(let i = data; i >0; i-=2){
      count++;
    }
    return count;
  }
  const makeRoomPerAdults =()=>{
    if(roomData.adults < 2){
      setRoomData((prev)=>{
        return{
          ...prev,
          guests:1,
          rooms:1
        }
      })
    }else if(roomData.adults >2){
      setRoomData((prev)=>{
        return{
          ...prev,
          rooms: makeRooms(prev.adults % 2 == 0 ? roomData.adults :roomData.adults + 1),
          guests:prev.adults
        }
      })
    }else if(roomData.adults == 2){
      setRoomData((prev)=>{
        return{
          ...prev,
          guests:2,
          rooms: prev.rooms > 2 ? 2 :prev.rooms
        }
      })
    }
  }

  useEffect(() => {
    if(scroll < 790){
      setShowBook(false);
    } else if(scroll > 790){
      setShowBook(true);
    }

  makeRoomPerAdults();
  }, [scroll,roomData]);
  return (
    <>
      <div className="booking_box_container">
        <style>{`
          .booking_box_container{
            z-index:10;
          }
        `}</style>
        <div
          className={`booking_all_container ${showBook ? "box_active" : ""}`}
        >
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              e.preventDefault()
            }
          >
            <div className="booking_internal_container">
              <div className="booking_header">
                <h2>Apply Cupon</h2>
                <p>Your Booking State</p>
              </div>
              <div className="booking_datetime_picker">
                <div className=" date_content calendar_content">
                  <MyDatePicker />
                </div>
                <div className=" date_content time_content">
                  <Time />
                </div>
              </div>
              <div className="price_picker">
                <p>Select Your Price</p>
                <button
                  onClick={() => handlePriceButton(fetchPrice.three)}
                  className={`${
                    price == fetchPrice.three ? "price_active" : ""
                  }`}
                >
                  Rs.{fetchPrice.three} <span>3hr</span>
                </button>
                <button
                  onClick={() => handlePriceButton(fetchPrice.six)}
                  className={`${price == fetchPrice.six ? "price_active" : ""}`}
                >
                  Rs.{fetchPrice.six} <span>6hr</span>
                </button>
                <button
                  onClick={() => handlePriceButton(fetchPrice.twelve)}
                  className={`${
                    price == fetchPrice.twelve ? "price_active" : ""
                  }`}
                >
                  {" "}
                  Rs.{fetchPrice.twelve} <span>12hr</span>
                </button>
                <p>Full Day Booking</p>
                <button
                  onClick={() => handlePriceButton(fetchPrice.t4)}
                  className={`${price == fetchPrice.t4 ? "price_active" : ""}`}
                >
                  Rs.{fetchPrice.t4} <span>24hr</span>
                </button>
              </div>
              <div className="guests_rooms_data">
                <p>Guest & room Details</p>
                <div
                  className="data_view_guests"
                  onClick={() => setEnableGuests(!enableGuests)}
                >
                  <input
                    type="text"
                    value={`${roomData.guests} Guest, ${roomData.rooms} room`}
                  />
                  <button>
                    <KeyboardArrowDownIcon />
                  </button>
                </div>
                <div
                  className={`guests_edit_box ${
                    enableGuests ? "guest_edit_active" : ""
                  }`}
                >
                  {guestMapData.map((elem, index) => {
                    return (
                      <div className="guests_data guests_d" key={index}>
                        <div className="data_contents">
                          <p className="title">{elem.title}</p>
                          <span>
                            <button onClick={()=>handleEditClick(1,elem.iso)}>
                              +
                            </button>
                            <p className="value">{elem.value}</p>
                            <button onClick={()=>handleEditClick(0,elem.iso)}>
                              -
                            </button>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="total_price_reserve">
                <h2>Total Price : Rs.{total_price}</h2>
                <button className="global_button" type="submit">
                  Reserve
                </button>
              </div>
            </div>
          </form>
        </div>
        <button className="bookbox" onClick={handleBookingBox}>
          <SaveAs style={{ fontSize: "50px" }} />
        </button>
      </div>
    </>
  );
};

export default Bookings;

