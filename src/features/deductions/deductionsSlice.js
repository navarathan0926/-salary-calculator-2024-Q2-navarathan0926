import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState =[
    // {
    //     id: '1',
    //     name: 'No pay',
    //     amount: 8000.00,
    //     epf: false
    // }  
]

const deductionsSlice = createSlice({
    name:"deductions",
    initialState,
    reducers:{
        resetDeductions: (state)=>{
            return [];
        },
        deductionAdded:{
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(name,amount, epf){
            return{
                payload:{
                    id:nanoid(),
                    name,
                    amount,
                    epf
                }
            }
        }
    },
    deductionRemoved(state, action) {
        const { id } = action.payload;
        return state.filter(deduction => deduction.id !== id);
    },
    deductionUpdated:{
        reducer(state, action) {
            const { id, name, amount, epf } = action.payload;
            const deductionEarning = state.find(deduction => deduction.id === id);
            if (deductionEarning) {
                deductionEarning.name = name;
                deductionEarning.amount = amount;
                deductionEarning.epf = epf;
            }
        },
        prepare(id,name,amount, epf){
            return{
                payload:{
                    id,
                    name,
                    amount,
                    epf
                }
            }
        }
    },
    }
})

export const selectAllDeductions = (state)=> state.deductions;
export const {deductionAdded, deductionRemoved, deductionUpdated,resetDeductions} =deductionsSlice.actions;
export default deductionsSlice.reducer;
