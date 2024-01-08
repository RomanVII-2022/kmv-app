import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIURL } from '@env';
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://31e9-102-215-34-241.ngrok-free.app'
})

import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = createAsyncThunk('auth/userLogin', async (formData) => {
    const response = await axiosInstance.post('/user/login-user',
    {
        email: formData.email,
        password: formData.password
    }
    )
    if (response.data.success) {
        await AsyncStorage.setItem('authtoken', response.data.data);
    }
    return response.data
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
        builders.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false
            if (action.payload.success) {
                state.message = action.payload.message
                AsyncStorage.setItem('authtoken', action.payload.data)
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