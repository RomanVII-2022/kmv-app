import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AuthContext from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { updateUser } from '../features/userSlice';

const ProfileScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const { userLogout } = useContext(AuthContext)

  const [modalVisible, setModalVisible] = useState(false);

  const [hasGallaryPermission, setHasGallaryPermission] = useState(null)

  const [userImage, setUserImage] = useState(null)

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGallaryPermission(galleryStatus.status === 'granted');
    })();
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    });

    if(!result.canceled) {
      setUserImage(result.assets)
      const formData = new FormData();
      const namelist = result.assets[0].uri.split('/')
      formData.append('file', {
        uri: result.assets[0].uri,
        name: namelist.pop(),
        type: result.assets[0].type
      })
      dispatch(updateUser(formData))
    }
  };

  if (hasGallaryPermission === false) {
    return <Text>No access to internal storage.</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.profileimage}>
          {userImage?<Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: userImage[0].uri,
            }}
          /> : <Ionicons name="person-outline" size={65} color='forestgreen' />}
        </View>

        <View style={styles.userdetails}>
          <Text style={styles.name}>VICTOR MWAI KINYUA</Text>
          <Text>254712345678</Text>
        </View>

        <View style={styles.useraction}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.actiontext}>CHANGE PHOTO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.useraction}>
          <TouchableOpacity>
            <Text style={styles.actiontext}>CHANGE PIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.useraction}>
          <TouchableOpacity onPress={userLogout}>
            <Text style={styles.actiontext}>LOGOUT</Text>
          </TouchableOpacity>
        </View>


        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.modalText}>Profile Photo</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.modaluseraction}>
                <TouchableOpacity onPress={() => pickImage()}>
                  <Text style={styles.modalactiontext}>PICK PHOTO</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modaluseraction}>
                <TouchableOpacity>
                  <Text style={styles.modalactiontext}>TAKE PHOTO</Text>
                </TouchableOpacity>
              </View>

              
            </View>
          </View>
        </Modal>
        
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'forestgreen'
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 200
  },
  profileimage: {
    width: 150,
    height: 150,
    position: 'absolute',
    end: '30%',
    top: '-13%',
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'forestgreen',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderLeftColor: 'forestgreen',
    borderRightWidth: 2,
    borderRightColor: 'forestgreen',
    overflow: 'hidden'
  },
  userdetails: {
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  name: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'forestgreen',
    fontSize: 15,
    marginBottom: 5
  },
  useraction: {
    borderTopColor: 'forestgreen',
    borderTopWidth: 1,
    padding: 20,
    marginHorizontal: 25
  },
  modaluseraction: {
    borderTopColor: 'forestgreen',
    borderTopWidth: 1,
    padding: 15
  },
  actiontext: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'midnightblue',
    fontWeight: 'bold'
  },
  modalactiontext: {
    fontSize: 15,
    color: 'midnightblue'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 18
  },
})