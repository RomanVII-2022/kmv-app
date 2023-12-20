import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    'name': 'Victor Mwai'
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState
})


export default userSlice.reducer;
export const getAllUsers = (state) => state.user.name