import { createSlice } from "@reduxjs/toolkit";

const initialState={
    salary: 0,
}

export const salarySlice =createSlice({
    name:'salary',
    initialState,
    reducers:{
        increment: (state)=>{
            state.salary +=1;
        },
        decrement: (state)=>{
            state.salary -=1;
        },
        reset: (state)=>{
            state.salary =0;
        },
        incrementByAmount: (state, action)=>{
            state.salary += action.payload;
        },
        setSalary(state, action) {
            state.salary = action.payload;
        },
        
    }
});

export const { increment, decrement, reset, incrementByAmount,setSalary} = salarySlice.actions;

export default salarySlice.reducer;