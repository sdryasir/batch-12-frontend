import { createSlice } from '@reduxjs/toolkit'

const cartState= {
    cart: [],
}


const cartSlice = createSlice({
    name:'cart',
    initialState:cartState,
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload); 
        },
        removeFromCart:(state, action)=>{

        }
    }
})


// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer