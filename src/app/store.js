import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import mpesaReducer from '../features/mpesaSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        mpesa: mpesaReducer,
        auth: authReducer
    }
})
