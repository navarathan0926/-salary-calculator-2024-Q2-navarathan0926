import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState =[
    {
        id: '1',
        name: 'Travel',
        amount: 100.00,
        epf: true
    }
    
]

const earningSlice = createSlice({
    name:"earnings",
    initialState,
    reducers:{
        earningAdded:{
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
    earningRemoved(state, action) {
        const { id } = action.payload;
        return state.filter(earning => earning.id !== id);
    },
    earningUpdated:{
        reducer(state, action) {
            const { id, name, amount, epf } = action.payload;
            const existingEarning = state.find(earning => earning.id === id);
            if (existingEarning) {
                existingEarning.name = name;
                existingEarning.amount = amount;
                existingEarning.epf = epf;
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
    }
    }
})

export const selectAllEarnings = (state)=> state.earnings;
export const {earningAdded, earningRemoved, earningUpdated} =earningSlice.actions;
export default earningSlice.reducer;
