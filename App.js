import 'react-native-gesture-handler';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext.js';
import AppNav from './src/components/AppNav.js';

export default function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <StatusBar animated={true} translucent={true} backgroundColor="forestgreen" />
        <AppNav />
      </AuthProvider>
    </Provider>
  );
}

