import { createContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://d6e6-102-215-34-241.ngrok-free.app'
})

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [usertoken, setUsertoken] = useState(null)

    const userLogin = async (formData) => {
        const response = await axiosInstance.post('/user/login-user',
        {
            email: formData.email,
            password: formData.password
        }
        )

        if (response.data.success) {
            await AsyncStorage.setItem('userToken', response.data.data)
            const token  = await AsyncStorage.getItem('userToken')
            setUsertoken(token)
        }

        return response.data
    }

    const isLogedIn = async () => {
        try {
            const token  = await AsyncStorage.getItem('userToken')
            setUsertoken(token)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isLogedIn()
    }, [])

    const userLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken')
            setUsertoken(null)
        } catch (error) {
            console.log(error)
        }
    }

    initialValues = {
        userLogin: userLogin,
        usertoken: usertoken,
        userLogout: userLogout
    }

    return (
        <AuthContext.Provider value={initialValues}>
            {children}
        </AuthContext.Provider>
    )
}