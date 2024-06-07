import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id:'1',
        title: 'Learning Redux toolkit',
        content: "It's easy"
    },
    {
        id:'2',
        title: 'Subscribe',
        content: "Like and Share"
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers,
})