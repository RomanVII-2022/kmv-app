import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendtomobile = createAsyncThunk('mpesa/sendtomobile', async (formData) => {
    const response = await axios.get('http://localhost:5555/mpesa/send-to-mobile')
    console.log(response)
    // return response.data
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