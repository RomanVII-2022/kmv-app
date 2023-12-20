import 'react-native-gesture-handler';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import TabNavigation from './src/navigation/TabNavigation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar animated={true} translucent={true} backgroundColor="forestgreen" />
      <TabNavigation />
    </Provider>
  );
}

