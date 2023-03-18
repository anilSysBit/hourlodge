import React, { useState, useRef, useEffect } from "react";

interface TimePickerProps {
  currentTime: any;
}
const Time: React.FC<TimePickerProps> = ({ currentTime }) => {
  const [meridian, setMeridian] = useState({
    aMeri: false,
    pMeri: true,
  });
  const [activeIndex, setActiveIndex] = useState(21);
  const [displayPicker, setDisplayPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("21:00");
  const timeContainerRef = useRef<HTMLDivElement>(null);
  const timeArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  console.log(activeIndex);

  const handleActiveClick = (item: number) => {
    setActiveIndex(item);
    if (item < 10) {
      setSelectedTime(`0${item}:00`);
    } else if (item >= 10) {
      setSelectedTime(`${item}:00`);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      timeContainerRef.current &&
      !timeContainerRef.current.contains(event.target as Node)
    ) {
      setDisplayPicker(false);
    }
  };

  const handleTimePicker = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDisplayPicker(true);
  };

  const handleAmPm = (e: React.MouseEvent<HTMLButtonElement>, hand: string) => {
    e.preventDefault();
    setMeridian((prev) => {
      return {
        aMeri: hand == "am" ? true : false,
        pMeri: hand == "pm" ? true : false,
      };
    });
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
        onChange={() => setSelectedTime(selectedTime)}
        value={selectedTime}
      />
      <div className={`time_container`} ref={timeContainerRef}>
        <style>{`
        .time_container{
          display:${displayPicker ? "block" : "none"};
        }
      `}</style>
        <div className="internal_time_container">
          <div className="am_pm_container">
            <button
              className={`time_button am_button ${
                meridian.aMeri ? "am_pm_active" : null
              }`}
              onClick={(e): void => handleAmPm(e, "am")}
            >
              AM
            </button>
            <button
              className={`time_button pm_button ${
                meridian.pMeri ? "am_pm_active" : null
              }`}
              onClick={(e): void => handleAmPm(e, "pm")}
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
                      className={`time_box ${
                        !meridian.aMeri && index < 12 ? "time_box_am" : ""
                      } ${
                        !meridian.pMeri && index >= 12 ? "time_box_pm" : ""
                      } time_box${index} ${
                        index == activeIndex ? "time_box_active" : ""
                      }`}
                      key={index}
                      onClick={() => {
                        handleActiveClick(index);
                        setDisplayPicker(false);
                      }}
                    >
                      <p>
                        {elem > 12 ? elem - 12 : elem}
                        :00
                      </p>
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
