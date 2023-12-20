import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import { FontAwesome, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import SavingsScreen from '../screens/SavingsScreen';
import LoanScreen from '../screens/LoanScreen';
import AccountScreen from '../screens/AccountScreen';

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{
              tabBarActiveTintColor: 'midnightblue',
              tabBarInactiveTintColor: 'chartreuse',
              tabBarIcon: ({ focused, color, size }) => ( 
                    <FontAwesome name="home" size={24} color={color} />
              ),
              title: () => (
                <Text style={{fontSize: 10}}>HOME</Text>
              ),
            }} />

            <Tab.Screen name="Savings Tab" component={SavingsScreen} options={{
              tabBarActiveTintColor: 'midnightblue',
              tabBarInactiveTintColor: 'chartreuse',
              tabBarIcon: ({ focused, color, size }) => ( 
                  <MaterialCommunityIcons name="piggy-bank-outline" size={24} color={color} />
              ),
              title: () => (
                <Text style={{fontSize: 10}}>SAVINGS</Text>
              ),
            }} />

            <Tab.Screen name="Loans Tab" component={LoanScreen} options={{
              tabBarActiveTintColor: 'midnightblue',
              tabBarInactiveTintColor: 'chartreuse',
              tabBarIcon: ({ focused, color, size }) => ( 
                <MaterialCommunityIcons name="hand-coin-outline" size={24} color={color} />
              ),
              title: () => (
                <Text style={{fontSize: 10}}>LOANS</Text>
              ),
            }} />

            <Tab.Screen name="Account Tab" component={AccountScreen} options={{
              tabBarActiveTintColor: 'midnightblue',
              tabBarInactiveTintColor: 'chartreuse',
              tabBarIcon: ({ focused, color, size }) => ( 
                <SimpleLineIcons name="wallet" size={24} color={color} />
              ),
              title: () => (
                <Text style={{fontSize: 10}}>ACCOUNT</Text>
              ),
            }} />

        </Tab.Navigator>   
    </NavigationContainer>
  )
}

export default TabNavigation


const styles = StyleSheet.create({
  iconbgvooma: {
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bg: {
      padding: 5
    }
})