import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerTransparent: true,
            headerTitle: 'KMV',
            headerTintColor: 'white',
        }}
    >
        <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation