import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const HomeServices = ({navigation}) => {
  return (
    <View style={styles.services}>

        <View style={styles.row}>

        <TouchableOpacity onPress={() => navigation.navigate('SendForm')}>
            <View style={styles.bg}>
                <View style={styles.iconbg}>
                    <MaterialIcons name="send-to-mobile" size={35} color="chartreuse" />
                </View>
            </View>
            <View>
                <Text style={styles.description}>SEND TO MOBILE</Text>
            </View>
        </TouchableOpacity>

        <View>
            <View style={styles.bg}>
            <View style={styles.iconbg}>
                <Feather name="send" size={35} color="skyblue" />
            </View>
            </View>
            <View>
            <Text style={styles.description}>BANK TRANSFERS</Text>
            </View>
        </View>

        <View>
            <View style={styles.bg}>
            <View style={styles.iconbg}>
                <MaterialCommunityIcons name="phone-refresh" size={35} color="orange" />
            </View>
            </View>
            <View>
            <Text style={styles.description}>BUY AIRTIME</Text>
            </View>
        </View>

        </View>

        <View style={styles.row}>

        <View>
            <View style={styles.bg}>
            <View style={styles.iconbg}>
                <Ionicons name="globe-outline" size={35} color="maroon" />
            </View>
            </View>
            <View>
            <Text style={styles.description}>GLOBAL TRANSFERS</Text>
            </View>
        </View>

        <View>
            <View style={styles.bg}>
            <View style={styles.iconbg}>
                <FontAwesome5 name="money-check" size={35} color="black" />
            </View>
            </View>
            <View>
            <Text style={styles.description}>WITHDRAW CASH</Text>
            </View>
        </View>

        <View>
            <View style={styles.bg}>
            <View style={styles.iconbg}>
                <MaterialCommunityIcons name="credit-card-multiple-outline" size={35} color="forestgreen" />
            </View>
            </View>
            <View>
            <Text style={styles.description}>CARD SERVICES</Text>
            </View>
        </View>

        </View>

    </View>
  )
}

export default HomeServices

const styles = StyleSheet.create({
    services: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 20,
        height: 220,
        padding: 10,
        backgroundColor: 'white',
        elevation: 5
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
      },
      bg: {
        padding: 5
      },
      iconbg: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'azure',
        justifyContent: 'center',
        alignItems: 'center'
      },
      description: {
        fontFamily: 'serif',
        fontSize: 8,
        alignSelf: 'center'
      }
})