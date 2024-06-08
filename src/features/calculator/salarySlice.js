import { createSlice } from "@reduxjs/toolkit";
import {useSelector} from 'react-redux';
import { selectAllEarnings } from "../earnings/earningsSlice";

const initialState={
    basic: 0.00,
    totalEarningsForEPF:0.00,
    totalEarning:0.00,
    grossEarning: 0.00,
    grossDeduction: 0.00,
    grossSalaryForEPF:0.00,
    employeeEPF:0.00,  //8%
    employerEPF: 0.00, //12%
    employerETF:0.00, //3
    APIT:0.00,
    netSalary:0.00,
    CTC:0.00,
    constant:0.00,
    taxPercentage:0.00
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
        setTotalEarning(state,action){
            state.totalEarning = action.payload;
        },
        setGrossDeduction(state,action){
            state.grossDeduction = action.payload;
        },
        setTotalEarningsForEPF(state,action){
            state.totalEarningsForEPF = action.payload;
        },
        setGrossEarning(state){
            state.grossEarning = state.totalEarning - state.grossDeduction;
        },
        setGrossSalaryForEPF(state){
            state.grossSalaryForEPF = state.totalEarningsForEPF - state.grossDeduction;
        },
        setEmployeeEPF(state){
            state.employeeEPF = state.grossSalaryForEPF * 0.08;
        },
        setEmployerEPF(state){
            state.employerEPF = state.grossSalaryForEPF * 0.12;
        },
        setEmployerETF(state){
            state.employerETF = state.grossSalaryForEPF * 0.03;
        },
        setTax(state){
            if(state.basic <= 100000){
                state.taxPercentage= 0;
                state.constant=0;
            }else if(state.basic <= 141667){
                state.taxPercentage= 0.06;
                state.constant=6000.00;
            }else if(state.basic <= 183333){
                state.taxPercentage= 0.12;
                state.constant=14500.00;
            }else if(state.basic <= 225000){
                state.taxPercentage= 0.18;
                state.constant=25500.00;
            }else if(state.basic <= 266667){
                state.taxPercentage= 0.24;
                state.constant=39000.00;
            }else if(state.basic <= 308333){
                state.taxPercentage= 0.3;
                state.constant=55000.00;
            }else{
                state.taxPercentage= 0.36;
                state.constant=73500.00;
            }
        },
        setAPIT(state){
            
            state.APIT = (state.grossEarning * state.taxPercentage) - state.constant;
        },
        setNetSalary(state){
            state.netSalary = state.grossEarning - state.employeeEPF- state.APIT;
        },
        setCTC(state){
            state.CTC = state.grossEarning + state.employerEPF + state.employerETF;
        },
    }
});

export const {reset, incrementByAmount,setBasic, setTotalEarning, setGrossDeduction,
                setTotalEarningsForEPF, setGrossEarning, setGrossSalaryForEPF,setEmployeeEPF,
                setEmployerEPF,setEmployerETF,setTax,setAPIT,setNetSalary,setCTC} = salarySlice.actions;
export const selectAllSalaries = (state)=> state.salary;
export default salarySlice.reducer;