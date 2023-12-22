import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import SendFormScreen from '../screens/SendFormScreen';
import { Text } from 'react-native';

const HomeStackScreen = () => {

    const HomeStack = createNativeStackNavigator();

  return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" options={{headerShown: false}}>
              {() => (
                <DrawerNavigation>
                  <HomeScreen />
                </DrawerNavigation>
              )}
            </HomeStack.Screen>
            <HomeStack.Screen name="SendForm" component={SendFormScreen} options={{headerTitle: () => (
              <Text style={{color: 'midnightblue', fontSize: 17}}>SEND TO MOBILE</Text>
            )}}/>
        </HomeStack.Navigator>
  )
}

export default HomeStackScreen