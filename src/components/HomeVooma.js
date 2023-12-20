import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react'
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const HomeVooma = () => {
  return (
    <View style={styles.vooma}>
              
        <Text style={styles.heading}>VOOMA PAY</Text>
        
        <View style={styles.voomarow}>

        <View style={styles.voomacard}>
            <View>
            <View style={styles.bg}>
                <View style={styles.iconbgvooma}>
                <FontAwesome5 name="receipt" size={24} color="white" />
                </View>
            </View>
            <View>
                <Text style={styles.description}>PAYBILL</Text>
            </View>
            </View>
        </View>

        <View style={styles.voomacard}>
            <View>
            <View style={styles.bg}>
                <View style={styles.iconbgvooma}>
                <MaterialIcons name="send-to-mobile" size={24} color="white" />
                </View>
            </View>
            <View>
                <Text style={styles.description}>BUY GOODS</Text>
            </View>
            </View>
        </View>

        <View style={styles.voomacard}>
            <View>
            <View style={styles.bg}>
                <View style={styles.iconbgvooma}>
                <FontAwesome5 name="user-graduate" size={24} color="white" />
                </View>
            </View>
            <View>
                <Text style={styles.description}>LIPA KARO</Text>
            </View>
            </View>
        </View>

        </View>
    </View>
  )
}

export default HomeVooma

const styles = StyleSheet.create({
    iconbgvooma: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'maroon',
        justifyContent: 'center',
        alignItems: 'center'
      },
      description: {
        fontFamily: 'serif',
        fontSize: 8,
        alignSelf: 'center'
      },
      vooma: {
        flex: 1,
        marginVertical: 30
      },
      heading: {
        fontFamily: 'serif',
        marginBottom: 15
      },
      voomarow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      voomacard: {
        borderColor: 'gray',
        borderRadius: 5,
        elevation: 3,
        minHeight: 100,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center'
      },
      bg: {
        padding: 5
      }
})