import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://c2e3-102-215-34-110.ngrok-free.app'
})

export const updateUser = createAsyncThunk('user/updateUser', async (formData) => {
    try {
        const response = await axiosInstance.put('/user/update-user/658e4fd567d8a5cb0faf596c', formData, 
        { headers: { 'Content-Type': 'multipart/form-data'} })
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
    
})

const initialState = {
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builders) => {
        builders.addCase(updateUser.pending, (state, action) => {
            state.loading = true
        })
        builders.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
        })
        builders.addCase(updateUser.rejected, (state, action) => {
            state.loading = false
        })
    }
})


export default userSlice.reducer;
export const getAllUsers = (state) => state.user.name