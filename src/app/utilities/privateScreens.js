import { useSelector } from "react-redux";
import LoginScreen from "../../screens/LoginScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


const PrivateScreen = ({children}) => {

    const { usertoken } = useContext(AuthContext)

    if (usertoken) {
        return children
    }else {
        return <LoginScreen />
    }
    
}

export default PrivateScreen;