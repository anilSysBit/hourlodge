import React from 'react'
import DatePicker from "react-date-picker";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from '../store';
import { newDate } from '../store/slices/filterSlice';


const MyDatePicker = () => {

    const dispatch = useDispatch();
    const datetime = useSelector((state:RootState)=>{
      return state.filter
    })
    const todayDate = new Date();
    const nowDate = datetime.date;
    const maxDate = datetime.maxDate;
    let textDate = nowDate?.toLocaleDateString('en-US',{
      month:'short',
      day:'numeric',
      year:'numeric'
    })

    const handleDateChange=(changeDate:Date)=>{
        dispatch(newDate(changeDate))
      }
  return (
    <div className="filter_select date_select">
    <h3>Date</h3>
    {/* <input type="date" className="datetime"  /> */}
    <DatePicker
      onChange={handleDateChange}
      value={nowDate}
      minDate={todayDate}
      maxDate={maxDate}
      calendarClassName="ourstay_calendar"
    />
      <div className="cool_time_display">
      <p>{textDate}</p>
    </div>
  </div>
  )
}

export default MyDatePicker