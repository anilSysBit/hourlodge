import { OptionUnstyledType } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";

interface DateTimeState {
  date: Date|undefined;
  maxDate: Date|undefined;
  currentTime: string;
  selectedTime: string;
  city:any;
}


const initialState: DateTimeState = {
  date: undefined,
  maxDate: undefined,
  currentTime:'',
  selectedTime:'21:00',
  city:{value:'chitwan',label:'Chitwan'},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    newDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
      const maxDate = new Date()
      maxDate.setMonth(maxDate.getMonth() + 1)
      const curTime = (parseInt(state.date.toLocaleTimeString().slice(0, 2))+1).toString().concat(":00");
      state.maxDate = maxDate
      state.currentTime = curTime
      
    },
    setSelectedTime:(state,action:PayloadAction<string>)=>{
        state.selectedTime = action.payload
    },
    setCity:(state,action:PayloadAction<any>)=>{
      state.city = action.payload;
    }
  },
});

export const {newDate,setSelectedTime,setCity} = filterSlice.actions;
export default filterSlice.reducer;
