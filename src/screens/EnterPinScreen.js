import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const EnterPinScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.lock}>
            <SimpleLineIcons name="lock-open" size={40} color="midnightblue" />
        </View>
        <View>
            <Text style={styles.title}>Enter PIN</Text>
        </View>

        <View style={styles.dialpad}>
            <View style={styles.row}>
                <View style={styles.cell1}>
                    <Text style={styles.cellitem}>1</Text>
                </View>
                <View style={styles.cell2}>
                    <Text style={styles.cellitem}>2</Text>
                </View>
                <View style={styles.cell3}>
                    <Text style={styles.cellitem}>3</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.cell1}>
                    <Text style={styles.cellitem}>4</Text>
                </View>
                <View style={styles.cell2}>
                    <Text style={styles.cellitem}>5</Text>
                </View>
                <View style={styles.cell3}>
                    <Text style={styles.cellitem}>6</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.cell1}>
                    <Text style={styles.cellitem}>7</Text>
                </View>
                <View style={styles.cell2}>
                    <Text style={styles.cellitem}>8</Text>
                </View>
                <View style={styles.cell3}>
                    <Text style={styles.cellitem}>9</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.cell4}>
                    <MaterialCommunityIcons name="backspace-outline" size={24} color="red" />
                </View>
                <View style={styles.cell5}>
                    <Text style={styles.cellitem}>0</Text>
                </View>
                <TouchableOpacity style={styles.cell6}>
                    <Text style={{color: 'forestgreen'}} onPress={() => navigation.navigate('Account')}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EnterPinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    lock: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        elevation: 5
    },
    header: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60
    },
    title: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'midnightblue',
        margin: 40
    },
    dialpad: {
        flex: 1,
        width: '100%',
        marginTop: 30
    },
    row: {
        flexDirection: 'row'
    },
    cell1: {
        flex: 1,
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell2: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell3: {
        flex: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell4: {
        flex: 1,
        borderRightColor: 'black',
        borderRightWidth: 2,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell5: {
        flex: 1,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell6: {
        flex: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
        width: '33.3%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellitem: {
        
    }
})