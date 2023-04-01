import React,{useEffect, useState} from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

interface SliderProps{
  max:number|undefined;
  min:number|undefined;
}

const SmartFilter = () => {
  const [value, setValue] = useState<number[]>([400,5000]);
  const [activeIndex,setActiveIndex] = useState<number>(0);
  const [hrActive,setHrActive] = useState<number>(6);
  const [sliderLimit,setSliderLimit] = useState<SliderProps>({
    min:undefined,
    max:undefined
  });


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

  const hrs = {
    one:6,
    two:12,
    three:24
  }

  
  const handleResetButton=()=>{
    setActiveIndex(0)
    setHrActive(hrs.one)
    setValue([400,5000]);
  }
  const handleActiveFilterHr =(num:number)=>{
    setHrActive(num);
    setValue([400,5000]);
  }


  const handleSliderWithHrs =()=>{
    if(hrActive == hrs.one){
      setSliderLimit({
        max:1500,
        min:400,
      })
    }
    else if(hrActive == hrs.two){
      setSliderLimit({
        max:3500,
        min:800,
      })
    }
    else if(hrActive == hrs.three){
      setSliderLimit({
        max:5000,
        min:1000,
      })
    }
  }

  useEffect(()=>{
    handleSliderWithHrs();
  },[hrActive])
  return (
    <div className="smart_filter_container">
      <div className="smart_header">
        <h2>Select Filters</h2>
      </div>
      <div className="smart_body_container">
        <div className="reset_all_container">
            <h4>Reset To Default</h4>
            <button className="reset_filter_button" onClick={handleResetButton}>Reset</button>
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
        <div className="hrs_filter">
          <h3>Your Time</h3>
          <div className="button_container">
            <button className= {`filter_hr_button ${hrActive==hrs.one ? 'but_active':''}`} onClick={()=>handleActiveFilterHr(hrs.one)}>{hrs.one}hr</button>
            <button className= {`filter_hr_button ${hrActive==hrs.two ? 'but_active':''}`} onClick={()=>handleActiveFilterHr(hrs.two)}>{hrs.two}hr</button>
            <button className= {`filter_hr_button ${hrActive==hrs.three ? 'but_active':''}`} onClick={()=>handleActiveFilterHr(hrs.three)}>{hrs.three}hr</button>
          </div>
        </div>
        <div className="price_filter">
            <h3>Price for {hrActive}hr</h3>
            <p>Sort by  price</p>
          <Box sx={{ width: '100%' }}>
            <div className="slider_container">
                <p>Low</p>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              min={sliderLimit.min}
              max={sliderLimit.max}
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
