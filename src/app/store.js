import { configureStore } from "@reduxjs/toolkit";

//import requestReducer from '../features/request-slice'
import { apiSlice } from "../features/request-slice";


export const store = configureStore({
    reducer: { 
        [apiSlice.reducerPath] : apiSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})