import { createSlice } from "@reduxjs/toolkit";
import filterData from "../data/filterData";



const filterSlice = createSlice({
    name: 'offers',
    initialState: {
        items: filterData,
        searchItem : 'bestseller'
    },
    reducers : {
        filterProducts (state, action) {
            state.searchItem = action.payload
            
        }
    }
})


export const filterAction = filterSlice.actions;

export default filterSlice