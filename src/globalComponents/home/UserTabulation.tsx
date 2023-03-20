import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../store";
interface Data {
  user: number;
  hotel: number;
  city: number;
}
const UserTabulation: React.FC = () => {
  const fixedData = {
    user: 100,
    hotel: 800,
    city: 70,
  };
  const [data, setData] = useState(fixedData);
  const [scroll, setScroll] = useState(0);
  const [enableScroll, setEnableScroll] = useState(false);
  window.onscroll = () => {
    setScroll(Math.ceil(window.scrollY));
    scroll > 2600 ? setEnableScroll(true) : null;
  };
  useEffect(() => {
    if (scroll >= 2600) {
      setEnableScroll(true);
      setData({
        user: 0,
        hotel: 0,
        city: 0,
      });
      const interval = setInterval(() => {
        setData((prevData) => {
          if (prevData.user > 1000) {
            clearInterval(interval);
            return fixedData;
          }
          return {
            ...prevData,
            user: prevData.user + 5,
            hotel: prevData.hotel + 5,
            city: prevData.city + 1,
          };
        });
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, [enableScroll]);

  return (
    <div className="user_tabulation_table_container">
      <div className="tabulation_internal_container">
        <div className="total header_container">
          <h1 className="tabulation_header">Enterprise Analytics</h1>
        </div>
        <div className="total user_data">
          <h1 className="data">{data.user}K+</h1>
          <h1 className="title">Users</h1>
        </div>
        <div className="total hotel_data">
          <h1 className="data">{data.hotel}+</h1>
          <h1 className="title">Hotels Merge</h1>
        </div>
        <div className="total city_data">
          <h1 className="data">{data.city}+</h1>
          <h1 className="title">Places</h1>
        </div>
      </div>
    </div>
  );
};

export default UserTabulation;
