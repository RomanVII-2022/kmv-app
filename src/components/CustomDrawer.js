import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import AuthContext from '../context/AuthContext';

const CustomDrawer = (props) => {

    const { userLogout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'midnightblue'}}>
            <View style={{marginTop: 20, marginBottom: 50}}>
                <EvilIcons name="user" size={200} color="white" />
                <View style={{marginStart: 30}}>
                    <Text style={styles.name}>VICTOR M.</Text>
                    <Text style={styles.number}>+254712345678</Text>
                </View>
            </View>

            <View style={{backgroundColor: 'white', flex: 1}}>
                <DrawerItemList {...props} />
            </View>

        </DrawerContentScrollView>
        <View style={styles.footer}>
            <TouchableOpacity onPress={userLogout}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="exit-outline" size={22} color='midnightblue' />
                    <Text style={{marginLeft: 10, fontFamily: 'serif', fontSize: 15, color: 'midnightblue'}}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        color: 'white'
    },
    number: {
        color: 'forestgreen'
    },
    footer: {
        borderTopWidth: 1,
        borderColor: 'gray',
        padding: 20
    }
})