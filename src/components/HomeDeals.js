import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react'
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const HomeDeals = () => {
  return (
    <View style={styles.deals}>
        <Text style={styles.heading}>DEALS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
            style={styles.dealimage}
            source={require('../../assets/deal2.png')}
        />
        <Image
            style={styles.dealimage}
            source={require('../../assets/deal3.png')}
        />
        <Image
            style={styles.dealimage}
            source={require('../../assets/deal4.png')}
        />
        <Image
            style={styles.dealimage}
            source={require('../../assets/deal1.png')}
        />
        </ScrollView>
    </View>
  )
}

export default HomeDeals

const styles = StyleSheet.create({
    deals: {
        flex: 1,
    },
    dealimage: {
        width: 200,
        height: 150
    },
    heading: {
        fontFamily: 'serif',
        marginBottom: 15
      },
})