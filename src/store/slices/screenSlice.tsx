import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface ScreenState{
    scrollWidth:number;
}

const initialState:ScreenState = {
    scrollWidth:0,
}

const screenSlice = createSlice({
    name:'screen',
    initialState,
    reducers:{
        setScrollWidth(state,action:PayloadAction<number>){
            state.scrollWidth = action.payload
        }
    }
})

console.log(screenSlice.reducer)
export const {setScrollWidth} = screenSlice.actions;

export default screenSlice.reducer