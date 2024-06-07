import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import salaryReducer from '../features/calculator/salarySlice'

export const store = configureStore({
    reducer:{
        salary : salaryReducer,
        counter : counterReducer,
        
    }
});