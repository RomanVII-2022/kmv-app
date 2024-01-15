import { createContext, useState, useEffect } from "react";
import { ToastAndroid, Alert } from "react-native";
import { APIURL } from '@env';
import axios from "axios";
axios.defaults.validateStatus = () => true
const axiosInstance = axios.create({
    baseURL: 'https://d8f5-105-163-157-202.ngrok-free.app'
})

console.log(APIURL)

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
                ToastAndroid.showWithGravity(
                'Login was successful.',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                );
            }else {
                setIsloading(false)
                Alert.alert('ERROR ALERT', response.data.message || 'Something went wrong. Kindly try again.', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }

            return response.data
        } catch (error) {
            setIsloading(false)
            Alert.alert('ERROR ALERT', error.message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
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
            Alert.alert('ERROR ALERT', error.message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
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
            ToastAndroid.showWithGravity(
            'Logout was successful.',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            );
        } catch (error) {
            setIsloading(false)
            Alert.alert('ERROR ALERT', error.message, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
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