import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://f7fb-102-215-34-241.ngrok-free.app'
})

export const updateUser = createAsyncThunk('user/updateUser', async (formData) => {
    console.log(...formData)
    // const response = await axiosInstance.put('/user/update-user', formData)
    // console.log(response.data)
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