import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Time from "../features/Time";

interface Props{
  event:any
}
const cities = [
  { name: "Chitwan" },
  { name: "Pokhara" },
  { name: "Kathmandu" },
  { name: "Dharan" },
  { name: "Butwal" },
  { name: "Chitwan" },
  { name: "Pokhara" },
];
const FilterForm = () => {
  const [date, setDate] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('12:00');

  const [croll,setCroll] = useState(0);
  // const [enableScroll,setEnableScroll] = useState(false);




  let newDate = new Date();
  let maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  let currentDate = newDate.toISOString().split("T")[0];
  let currentTime = date.toLocaleTimeString().slice(0,2).concat(":00")

  window.onscroll = () => {
    setCroll(Math.ceil(window.scrollY))
    console.log(croll)
  }

  const handleTimePicker = (event:React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setShowTimePicker(!showTimePicker);
  };
  return (
    <form className="filter_box_container" onSubmit={(e:React.FormEvent<HTMLFormElement>)=>e.preventDefault()}>
      <style>{`
          ${croll > 600 ? `
            .filter_box_container{
              top:0;
              position:fixed;
              width:100%;
              border-radius:0;
            }
            .ourstay_calendar{
              top:calc(100% + 70px);
            }
            .time_container{
              top:calc(100% + 10px);
              right:30%;
            }
          ` : `
            .ourstay_calendar{
              bottom: calc(100% + 100px);
            }
          `}
      `}</style>
      <div className="filter_select">
        <h3>City</h3>
        <select name="city" id="nepalcity">
          {cities.map((elem, index) => {
            return (
              <option key={index} value={elem.name}>
                {elem.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter_select">
        <h3>Date</h3>
        {/* <input type="date" className="datetime"  /> */}
        <DatePicker
          onChange={setDate}
          value={date}
          minDate={newDate}
          maxDate={maxDate}
          calendarClassName="ourstay_calendar"
        />
      </div>
      <div className="filter_select">
        <h3>Time</h3>
        <input
          type="time"
          className="datetime"
          min={currentTime}
          onClick={handleTimePicker}
          value={selectedTime}
        />
        {showTimePicker ? <Time setSelectedTime={setSelectedTime} setShowTimePicker={setShowTimePicker}/> : null}
      </div>
      <div className="filter_select">
        <button type="submit" className="global_button">
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
