
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Select,{StylesConfig} from "react-select";
import { RootState } from "../store";
import {setCity} from '../store/slices/filterSlice'

interface OptionType {
  value: string;
  label: string;
}
const CityList = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);

  const city = useSelector((state:RootState)=>state.filter.city)
  const dispatch = useDispatch();

  // later this data will be implemented through database this is for frontend development
  const cityOptions: OptionType[] = [
    { value: "chitwan", label: "Chitwan" },
    { value: "kathmandu", label: "Kathmandu" },
    { value: "pokhara", label: "Pokhara" },
  ];

  const customStyles: StylesConfig<OptionType> = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: "2px solid var(--global)",
      borderRadius: "10px",
      padding: "5px",
      fontSize: "20px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "var(--global)" : "white",
      color: state.isFocused ? "#fff" : "#666",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--global)",
        borderRadius: "10px",
      },
    }),
  };
  
  const handleChange=(currentElem:any)=>{
    dispatch(setCity(currentElem))
  }


  return (
    <Select
      styles={customStyles}
      className={'city_select'}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name="color"
      options={cityOptions}
      onChange={handleChange}
      value={city}
    />
  );
};

export default CityList;
