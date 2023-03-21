import { configureStore,combineReducers } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import screenReducer from './slices/screenSlice'


const rootReducer = combineReducers({
    screen:screenReducer,
    filter:filterReducer
})
const store = configureStore({
    reducer:rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>;