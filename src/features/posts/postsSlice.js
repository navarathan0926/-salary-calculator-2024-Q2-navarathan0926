import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";

const initialState =[
    {
        id:'1',
        title: 'Learning Redux toolkit',
        content: "It's easy",
        con:true
    },
    {
        id:'2',
        title: 'Subscribe',
        content: "Like and Share",
        con:false
    },
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title,content,con,userId){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    con,
                    userId
                }
            }
        }
    }
    }
})

export const selectAllPosts = (state)=> state.posts;
export const { postAdded} = postSlice.actions;
export default postSlice.reducer;