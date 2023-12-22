import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { FontAwesome5, AntDesign } from '@expo/vector-icons'; 

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily: 'serif', fontWeight: 'bold'}}>KMV BANK</Text>
      <Text style={{color: 'forestgreen'}}>123456789</Text>

      <View style={styles.profile}>
        <View>
          <View>
            <Text style={{fontFamily: 'serif', fontWeight: 'bold'}}>AVAILABLE BALANCE</Text>
            <Text style={{color: 'forestgreen', fontSize: 20, fontWeight: '500'}}>KES 2,566,298</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontFamily: 'serif', fontWeight: 'bold'}}>LEDGER BALANCE</Text>
            <Text style={{color: 'forestgreen', fontSize: 20, fontWeight: '500'}}>KES 2,566,298</Text>
          </View>
        </View>
        <View>
          <AntDesign style={{borderColor: 'gray', borderWidth: 1, borderRadius: 100, padding: 10}} name="user" size={65} color="black" />
        </View>
      </View>

      <View style={styles.pill}>
        <Text style={styles.pillitem}>ACCOUNTS</Text>
        <Text style={styles.pillitem1}>ACTIVITY</Text>
        <Text style={styles.pillitem}>BUDGETS</Text>
      </View>

      <View style={styles.general}>
        <Text style={{borderColor: 'black', borderWidth: 1, paddingHorizontal: 15, borderRadius: 20}}>DECEMBER</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>KES 289,000</Text>
      </View>

      <View style={styles.activitylist}>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>GENERAL</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>KES 289,000</Text>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  pill: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pillitem: {
    padding: 10,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },
  pillitem1: {
    padding: 10,
    fontWeight: 'bold',
    fontFamily: 'serif',
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
    borderRightColor: 'gray',
    borderRightWidth: 1,
    backgroundColor: 'forestgreen',
    color: 'white'
  },
  general: {
    marginVertical: 30,
    width: '70%',
    minHeight: 220,
    borderColor: 'cadetblue',
    borderWidth: 10,
    borderRadius: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activitylist: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  }
})