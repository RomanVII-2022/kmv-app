import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIURL } from '@env';
axios.defaults.validateStatus = () => true;
const axiosInstance = axios.create({
    baseURL: 'https://d8f5-105-163-157-202.ngrok-free.app'
})

export const sendtomobile = createAsyncThunk('mpesa/sendtomobile', async (formData) => {
    const response = await axiosInstance.post('/mpesa/send-to-mobile', {
        phone: formData.phonenumber,
        amount: formData.amount
    })
    console.log(response.data)
})

const initialState = {
    "loading": false
}

const mpesaSlice = createSlice({
    'name': "mpesa",
    initialState: initialState,
    extraReducers: (builders) => {
        builders.addCase(sendtomobile.pending, (state, action) => {
            state.loading = true
        })
        builders.addCase(sendtomobile.fulfilled, (state, action) => {
            state.loading = false
        })
        builders.addCase(sendtomobile.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default mpesaSlice.reducer;