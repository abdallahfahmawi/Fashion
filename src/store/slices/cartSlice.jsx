import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items :[],
        quantity:0,
        totalAmount:0,
    },
    reducers: {
        addItem(state, action) {
            ////// check the item if it does not exist in the array push it and if the it exists just increase the quantity /////////
            ///////// check if the item is existing in the array or not 
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)   
            const existingCartItem = state.items[existingCartItemIndex]

            let updatedItems;

            if(existingCartItem) {
              // const  updatedItem = {...existingCartItem, amount : existingCartItem.amount + action.payload.amount};
               // updatedItems = [...state.items]
              //  updatedItems[existingCartItem] = updatedItem
                state.items[existingCartItemIndex].amount +=1
            } else {
                updatedItems = action.payload
                state.items.push(updatedItems)
            }
            
              // if(itemIndex >= 0) {
              //   state.items[itemIndex].amount +=1
             //   }else {
             //    const tempItem = {...action.payload,}
             //   state.items.push(tempItem)
             //   }
               
               
           // state.items.push(action.payload)

            state.quantity = state.items.length 

            state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount /////// convert it to two decimal in the components 
                
        }
    }
})

export const cartAction = cartSlice.actions;


export default cartSlice


