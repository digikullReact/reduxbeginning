import { createSlice } from '@reduxjs/toolkit'
import {fetchUserById} from "../thunks"

/// state object for that reducer
const initialState = {
  value: 0,
  namOfReducer:"My counter Reducer",
  obj2:{
    name:"S"
  },
  entities:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    /// ACTIONS --->
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementByTwo: (state) => {
      state.value += 2;
    },

    incrementByAmount: (state, action) => {

      debugger;
      state.value += action.payload
    },
    login:()=>{

    },
    signup:()=>{
      
    },
   
    
  },
  extraReducers: (builder) => {


 
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.pending, (state, action) => {
      debugger;

      // Add user to the state array
  
    }).addCase(fetchUserById.fulfilled, (state, action) => {
debugger;
      // Add user to the state array
    state.entities=action.payload.data;
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,incrementByTwo } = counterSlice.actions

export default counterSlice.reducer