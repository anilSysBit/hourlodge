import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Time from "../features/Time";


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
  let newDate = new Date();
  let maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  let currentDate = newDate.toISOString().split("T")[0];
  let currentTime = date.toLocaleTimeString().slice(0,2).concat(":00")

//   console.log(currentTime)
  useEffect(()=>{
  })

  const handleTimePicker = (
    event
  ) => {
    event.preventDefault();
    setShowTimePicker(!showTimePicker);
  };
  return (
    <form action="#" className="filter_box_container">
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
          onChange={e=>setSelectedTime(e.target.value)}
          value={selectedTime}
        />

        {showTimePicker ? <Time setSelectedTime={setSelectedTime}/> : null}
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
