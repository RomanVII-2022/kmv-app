import TabNavigation from '../navigation/TabNavigation.js';
import PrivateScreen from '../app/utilities/privateScreens.js';
import AuthContext from '../context/AuthContext.js';
import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

const AppNav = () => {

    const { isLoading } = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} color="midnightblue" />
            </View>
        )
    }

    return (
        <PrivateScreen><TabNavigation /></PrivateScreen>
    )
}

export default AppNav
