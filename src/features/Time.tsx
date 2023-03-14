import React, { useState } from "react";

interface TimePickerProps {
  setSelectedTime: (time: string) => void;
}
const Time: React.FC<TimePickerProps> = ({ setSelectedTime }) => {
  const [meridian, setMeridian] = useState({
    aMeri: true,
    pMeri: false,
  });
  const timeArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const handleTimeBoxClick = (elem: number) => {
    let selectedTime;
    if (elem == 12 && meridian.pMeri) {
      selectedTime = "12:00";
    } else if (elem < 12 && meridian.pMeri) {
      selectedTime = `${(elem += 12)}:00`;
    } else if (elem == 12 && meridian.aMeri) {
      selectedTime = "00:00";
    } else {
      selectedTime = `0${elem}:00`;
    }
    console.log(selectedTime);
    setSelectedTime(selectedTime);
  };
  return (
    <div className="time_container">
      <div className="internal_time_container">
        <div className="am_pm_container">
          <button
            className={`time_button am_button ${
              meridian.aMeri ? "am_pm_active" : null
            }`}
            onClick={()=>setMeridian((prev)=>{
                return{
                    aMeri:true,
                    pMeri:false
                }
            })}
          >
            AM
          </button>
          <button
            className={`time_button pm_button ${
              meridian.pMeri ? "am_pm_active" : null
            }`}
            onClick={()=>setMeridian((prev)=>{
                return{
                    aMeri:false,
                    pMeri:true
                }
            })}
          >
            PM
          </button>
        </div>
        <div className="time_tabulation_container">
          <div className="time_internal_tabulation_container">
            <div className="time_data_tabulation">
              {timeArray.map((elem, index) => {
                const [curTime, setCurTime] = useState(false);
                return (
                  <div
                    className={`time_box time_box${index}`}
                    key={index}
                    onClick={() => {
                      handleTimeBoxClick(elem);
                    }}
                  >
                    <p>{elem}:00</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
