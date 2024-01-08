import { StyleSheet, Text, View, ImageBackground, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { userLogin } from '../features/authSlice';
import { useDispatch } from 'react-redux';

const loginSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required")
  })

const LoginScreen = () => {

    const dispatch = useDispatch()

  return (
    <ImageBackground source={require('../../assets/fbg.jpeg')} style={styles.backgroundImage}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.header}>USER LOGIN</Text>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        dispatch(userLogin(values))
                        actions.resetForm()
                    }}

                >
                    {(props) => (
                        <>
                            <TextInput onChangeText={props.handleChange('email')} value={props.values.email} style={styles.inputfield} placeholder='Enter your email ...' cursorColor={'midnightblue'} />
                            <TextInput secureTextEntry={true} onChangeText={props.handleChange('password')} value={props.values.password} style={{...styles.inputfield, marginTop: 40, marginBottom: 60}} placeholder='Enter your password ...' cursorColor={'midnightblue'} />
                            <Button title='SUBMIT' onPress={props.handleSubmit} color={'midnightblue'} />
                        </>
                    )}
                </Formik>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
        height: '50%',
        marginTop: '30%'
    },
    header: {
        alignSelf: 'center',
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginVertical: 40
    },
    inputfield: {
        borderBottomColor: 'midnightblue',
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})