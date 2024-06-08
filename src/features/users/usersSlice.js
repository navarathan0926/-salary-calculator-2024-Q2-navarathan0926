import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id : '0' ,name:'Rathan'},
    {id : '1' ,name:'John Dave'},
    {id : '2' ,name:'Gray'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=> state.users;

export default usersSlice.reducer;
