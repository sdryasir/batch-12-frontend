import { configureStore } from '@reduxjs/toolkit';
import depositReducer from '../features/deposit/depositSlice';
import cartReducer from '../features/cart/cartSlice'
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  depAmount:depositReducer,
  cart:cartReducer
})

export const store = configureStore({
    reducer: {
      rootReducer
    }
  })