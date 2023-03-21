import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateTimeState {
  date: Date|undefined;
  maxDate: Date|undefined;
  currentTime: string;
  selectedTime: string;
}


const initialState: DateTimeState = {
  date: undefined,
  maxDate: undefined,
  currentTime:'',
  selectedTime:'21:00',
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
    }
  },
});

export const {newDate,setSelectedTime} = filterSlice.actions;
export default filterSlice.reducer;
