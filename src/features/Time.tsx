import React, { useState, useRef, useEffect } from "react";

interface TimePickerProps {
  currentTime:any,
}
const Time: React.FC<TimePickerProps> = ({
  currentTime
}) => {
  const [meridian, setMeridian] = useState({
    aMeri: true,
    pMeri: false,
  });
  const [activeIndex,setActiveIndex] = useState(-1);
  const [displayPicker,setDisplayPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const timeContainerRef = useRef<HTMLDivElement>(null);
  const timeArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


  const handleActiveClick =(item:number)=>{
    setActiveIndex(item);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      timeContainerRef.current &&
      !timeContainerRef.current.contains(event.target as Node)
    ) {
      setDisplayPicker(false);
    }
  };

  const  handleTimePicker=(e:MouseEvent)=>{
    e.preventDefault();
    setDisplayPicker(true);
  }
  const handleTimeBoxClick = (elem: number) => {
    let selectedTime;
    if (elem == 12 && meridian.pMeri) {
      selectedTime = "12:00";
    } else if (elem < 12 && meridian.pMeri) {
      selectedTime = `${(elem += 12)}:00`;
    } else if (elem == 12 && meridian.aMeri) {
      selectedTime = "00:00";
    } else if (elem >= 10 && meridian.aMeri) {
      selectedTime = `${elem}:00`;
    } else {
      selectedTime = `0${elem}:00`;
    }
    console.log(selectedTime);
    setSelectedTime(selectedTime);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [timeContainerRef]);
  return (
    <>
      <input
          type="time"
          className="datetime"
          min={currentTime}
          onClick={handleTimePicker}
          onChange={()=>setSelectedTime(selectedTime)}
          value={selectedTime}
        />
    <div className="time_container" ref={timeContainerRef}>
      <style>{`
        .time_container{
          display:${displayPicker ? 'block':'none'};
        }
      `}</style>
      <div className="internal_time_container">
        <div className="am_pm_container">
          <button
            className={`time_button am_button ${
              meridian.aMeri ? "am_pm_active" : null
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setMeridian((prev) => {
                e.preventDefault();
                return {
                  aMeri: true,
                  pMeri: false,
                };
              })
            }
          >
            AM
          </button>
          <button
            className={`time_button pm_button ${
              meridian.pMeri ? "am_pm_active" : null
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setMeridian((prev) => {
                e.preventDefault();
                return {
                  aMeri: false,
                  pMeri: true,
                };
              })
            }
          >
            PM
          </button>
        </div>
        <div className="time_tabulation_container">
          <div className="time_internal_tabulation_container">
            <div className="time_data_tabulation">
              {timeArray.map((elem, index) => {
                return (
                  <div
                    className={`time_box time_box${index} ${index == activeIndex ? 'time_box_active' : null}`}
                    key={index}
                    onClick={() => {
                      handleTimeBoxClick(elem);
                      handleActiveClick(index)
                      setDisplayPicker(false);
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
    </>
  );
};

export default Time;
