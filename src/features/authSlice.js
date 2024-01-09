import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIURL } from '@env';
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://d6e6-102-215-34-241.ngrok-free.app'
})

import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = createAsyncThunk('auth/userLogin', async (formData) => {
    const response = await axiosInstance.post('/user/login-user',
    {
        email: formData.email,
        password: formData.password
    }
    )
    return (response.data)
})

const inititalState = {
    loading: false,
    message: ''
}

const authSlice = createSlice({
    'name': 'auth',
    initialState: inititalState,
    extraReducers: (builders) => {
        builders.addCase(userLogin.pending, (state, action) => {
            state.loading = true
        })
        builders.addCase(userLogin.fulfilled, async (state, action) => {
            state.loading = false
            if (action.payload.success) {
                state.message = action.payload.message
            }else {
                state.message = "Something went wrong. Try again."
            }
        })
        builders.addCase(userLogin.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default authSlice.reducer;