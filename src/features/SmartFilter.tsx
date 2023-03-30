import React,{useState} from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const SmartFilter = () => {
  const [value, setValue] = useState<number[]>([500,3000]);
  const [activeIndex,setActiveIndex] = useState<number>(0);


  const valuetext = (value: number) => {
    return `${value}Rs`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const sliderStyle={
    color:'var(--global)',
  }

  const location = ['--All--','Sauraha','Tandi','Parsa','Bhandara','Narayanghat','Birendra Road','Chaubiskoti']

  return (
    <div className="smart_filter_container">
      <div className="smart_header">
        <h2>Select Filters</h2>
      </div>
      <div className="smart_body_container">
        <div className="reset_all_container">
            <h4>Reset To Default</h4>
            <button className="reset_filter_button">Reset</button>
        </div>
        <h3>Location</h3>
        <div className="location_filter">
            <p>Find by Near Location</p>
            <div className="data">
                {location.map((elem,index)=>{
                    return(
                        <h3 key={index} onClick={()=>setActiveIndex(index)} className={`${index == activeIndex ? 'active_location':''}`}>{elem}</h3>
                    )
                })}
            </div>
        </div>
        <div className="price_filter">
            <h3>Price</h3>
            <p>Sort by  price</p>
          <Box sx={{ width: '100%' }}>
            <div className="slider_container">
                <p>Low</p>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              min={400}
              max={5000}
              step={100}
              onChange={handleChange}
              style={sliderStyle}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
            />
            <p>High</p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SmartFilter;
