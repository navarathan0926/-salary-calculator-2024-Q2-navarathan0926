import { createSlice } from "@reduxjs/toolkit";


const initialState={
    basic: 0.00,
    sumEarningEPF:0.00,
    totalEarning:0.00,
    grossEarning: 0.00,
    grossDeduction: 0.00,
    grossSalaryForEPF:0.00,
    employeeEPF:8,
    employerEPF:12,
    employerETF:3,
    APIT:0.00,
    netSalary:0.00,
    CTC:0.00,
}

export const salarySlice =createSlice({
    name:'salary',
    initialState,
    reducers:{
        
        reset: (state)=>{
            state.basic =0;
        },
        incrementByAmount: (state, action)=>{
            state.basic += action.payload;
        },
        setBasic(state, action) {
            state.basic = action.payload;
        },
        
    }
});

export const { increment, decrement, reset, incrementByAmount,setBasic} = salarySlice.actions;

export default salarySlice.reducer;