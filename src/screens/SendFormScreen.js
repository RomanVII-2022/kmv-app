import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons'; 


const SendFormScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={styles.headericon}>
                <MaterialIcons name="send-to-mobile" size={35} color="forestgreen" />
            </View>
      </View>
      
      <View style={styles.body}>
        <Text style={{fontWeight: '500'}}>KMV BANK</Text>
        <View style={styles.inputfield}>
            <TextInput placeholder='******54321' cursorColor={'midnightblue'} />
            <Entypo name="triangle-down" size={24} color="black" />
        </View>
        <View style={styles.pill}>
            <Text style={styles.pillitem1}>MPESA</Text>
            <Text style={styles.pillitem}>AIRTEL</Text>
            <Text style={styles.pillitem}>T-KASH</Text>
            <Text style={styles.pillitem2}>VOOMA</Text>
        </View>
        <View style={{...styles.inputfield, marginBottom: 40}}>
            <TextInput placeholder='254712345678' cursorColor={'midnightblue'} />
        </View>
        <View style={{...styles.inputfield, marginBottom: 60}}>
            <TextInput placeholder='AMOUNT' cursorColor={'midnightblue'} />
        </View>
        <Button title='SUBMIT' color={'midnightblue'} />
      </View>
    </View>
  )
}

export default SendFormScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        borderTopColor: 'forestgreen',
        borderTopWidth: 5,
        marginVertical: 50
    },
    headericon: {
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -30,
        backgroundColor: 'azure',
        left: 30
    },
    body: {
        padding: 30
    },
    inputfield: {
        borderBottomColor: 'midnightblue',
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pill: {
        borderColor: 'midnightblue',
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 50
      },
      pillitem: {
        padding: 10,
        fontFamily: 'serif',
        borderRightColor: 'midnightblue',
        borderRightWidth: 1
      },
      pillitem1: {
        padding: 10,
        fontFamily: 'serif',
        backgroundColor: 'midnightblue',
        color: 'white',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderRightColor: 'midnightblue',
        borderRightWidth: 1
      },
      pillitem2: {
        padding: 10,
        fontFamily: 'serif'
      },
})