import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterPinScreen from '../screens/EnterPinScreen';
import AccountScreen from '../screens/AccountScreen';

const AccountStackScreen = () => {

    const AccountStack = createNativeStackNavigator();

  return (
    <AccountStack.Navigator initialRouteName="Pin">
        <AccountStack.Screen name="Pin" component={EnterPinScreen} options={{headerShown: false}}/>
        <AccountStack.Screen name="Account" component={AccountScreen}/>
    </AccountStack.Navigator>
  )
}

export default AccountStackScreen

const styles = StyleSheet.create({})