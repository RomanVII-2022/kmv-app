import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStackScreen = () => {

    const HomeStack = createNativeStackNavigator();

  return (
    <DrawerNavigation>
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Profile" component={ProfileScreen}/>
        </HomeStack.Navigator>
    </DrawerNavigation>
  )
}

export default HomeStackScreen