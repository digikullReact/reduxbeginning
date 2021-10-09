import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../reducers'
import  authSlice  from '../reducers/auth'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    auth:authSlice


  }
})