import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react'
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const HomeProfile = () => {
  return (
    <View style={styles.profile}>
      <View>
        <Text style={styles.greetings}>Good morning.</Text>
        <Text style={styles.username}>VICTOR K.</Text>
      </View>
      <View>
        <FontAwesome5 name="user-circle" size={65} color="white" />
      </View>
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 65
  },
  greetings: {
    fontFamily: 'serif',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'chartreuse'
  },
  username: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})