import { createSlice } from '@reduxjs/toolkit'

const initialDepositState= {
    value: 0,
}


const depositSlice = createSlice({
    name:'deposit',
    initialState:initialDepositState,
    reducers:{
        deposit:(state, action)=>{
            state.value += action.payload;
        }
    }
})


// Action creators are generated for each case reducer function
export const { deposit } = depositSlice.actions
export default depositSlice.reducer