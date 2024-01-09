import 'react-native-gesture-handler';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import TabNavigation from './src/navigation/TabNavigation';
import { StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen.js';
import PrivateScreen from './src/app/utilities/privateScreens.js';
import { AuthProvider } from './src/context/AuthContext.js';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StatusBar animated={true} translucent={true} backgroundColor="forestgreen" />
        <PrivateScreen><TabNavigation /></PrivateScreen>
      </AuthProvider>
    </Provider>
  );
}

