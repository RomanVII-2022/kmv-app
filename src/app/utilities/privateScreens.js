import { useSelector } from "react-redux";
import LoginScreen from "../../screens/LoginScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('authtoken')
    return token
}

const PrivateScreen = ({children}) => {
    const tkn = getToken();
    console.log(tkn)
    const userToken = true
    if (userToken) {
        return children
    }else {
        return <LoginScreen />
    }
    
}

export default PrivateScreen;