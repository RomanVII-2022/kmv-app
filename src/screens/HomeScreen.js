import { Button, StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../features/userSlice';
import { FontAwesome5, MaterialIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import HomeDeals from '../components/HomeDeals';
import HomeProfile from '../components/HomeProfile';
import HomeServices from '../components/HomeServices';
import HomeVooma from '../components/HomeVooma';

const HomeScreen = ({ navigation }) => {

    const name = useSelector(getAllUsers)

  return (
    <ImageBackground source={require('../../assets/fbg.jpeg')} style={styles.backgroundImage}>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <HomeProfile />
          <HomeServices />
          <HomeVooma />
          <HomeDeals />
        </ScrollView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    body: {
      flex: 1,
      width: '90%',
      marginVertical: 10,
      marginHorizontal: 20,
    },

    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },

})