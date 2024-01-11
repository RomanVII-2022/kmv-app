import { createContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://f7fb-102-215-34-241.ngrok-free.app'
})

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [usertoken, setUsertoken] = useState(null)
    const [isLoading, setIsloading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    const userLogin = async (formData) => {
        setIsloading(true)
        try {
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
                setIsloading(false)
            }else {
                setIsloading(false)
            }

            return response.data
        } catch (error) {
            setIsloading(false)
        }
    }

    const isLogedIn = async () => {
        try {
            setIsloading(true)
            const token  = await AsyncStorage.getItem('userToken')
            setUsertoken(token)
            setIsloading(false)
        } catch (error) {
            setIsloading(false)
        }
    }

    useEffect(() => {
        isLogedIn()
    }, [])

    const userLogout = async () => {
        try {
            setIsloading(true)
            await AsyncStorage.removeItem('userToken')
            setUsertoken(null)
            setIsloading(false)
        } catch (error) {
            setIsloading(false)
        }
    }

    initialValues = {
        userLogin: userLogin,
        usertoken: usertoken,
        userLogout: userLogout,
        isLoading: isLoading
    }

    return (
        <AuthContext.Provider value={initialValues}>
            {children}
        </AuthContext.Provider>
    )
}