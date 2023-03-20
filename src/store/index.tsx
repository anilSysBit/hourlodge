import { configureStore,combineReducers } from "@reduxjs/toolkit";
import screenReducer from './slices/screenSlice'


const rootReducer = combineReducers({
    screen:screenReducer,
})
const store = configureStore({
    reducer:rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>;