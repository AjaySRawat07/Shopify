import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import  userReducer from "./userSlice";

export const store = configureStore({
    reducer : {
        product : productReducer,
        user : userReducer,
    },
})