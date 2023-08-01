import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlcie";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer : {
        filter: filterSlice.reducer,
        cart : cartSlice.reducer
    }
})

export default store