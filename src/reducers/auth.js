import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"John doe",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  login:()=>{

    },
    signup:()=>{
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,signup } = authSlice.actions

export default authSlice.reducer