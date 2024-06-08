import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import salaryReducer from '../features/calculator/salarySlice'
import postsReducers from './../features/posts/postsSlice'
import earningsReducer from './../features/earnings/earningsSlice'
import usersReducer from './../features/users/usersSlice'

export const store = configureStore({
    reducer:{
        salary : salaryReducer,
        counter : counterReducer,
        posts: postsReducers,
        earnings: earningsReducer,
        users: usersReducer,
    }
});