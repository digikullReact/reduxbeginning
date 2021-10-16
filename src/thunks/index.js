import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


/// async action
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        debugger;
      
        /// axios in here to call the api
        ///---->
        const data=await axios.get("http://5.189.130.81:1337/restaurants");

        return data;

    }
  )
  export const addUser = createAsyncThunk(
    'users/addUSer',
    async (payload) => {
        debugger;
      
        /// axios in here to call the api
        ///---->
        const data=await axios.post("http://5.189.130.81:1337/restaurants",payload);

        return data;

    }
  )


