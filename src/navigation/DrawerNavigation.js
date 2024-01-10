import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerTransparent: true,
            headerTitle: 'KMV',
            headerTintColor: 'white',
            drawerLabelStyle: {marginLeft: -25, fontFamily: 'serif', fontSize: 15},
            drawerActiveBackgroundColor: 'midnightblue',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'forestgreen'
        }}
        drawerContent={props => <CustomDrawer {...props} />}
    >
        <Drawer.Screen name="HomeDrawer" component={HomeScreen} options={{
          title: 'HOME',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={24} color={color} />
          )
        }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          )
        }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation