import { View, Text, Image, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';

import styles from './SignUp.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'


const SignUp = ({ navigation }) => {
  const handleRegister = (values) => {
    // axios.post("http://localhost:5000/api/auth/login", values).then((res) => {
    //   localStorage.setItem("login")
    // }).catch()
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../../assets/movieapp-logo.png')} />
      </View>
      <Formik
        initialValues={{ username: '', email: '', password: '', passwordAgain: '', }}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Username"
              onChangeText={handleChange('username')}
              value={values.username}
            />
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <Input
              placeholder="Password Again"
              onChangeText={handleChange('passwordAgain')}
              value={values.passwordAgain}
            />
            <Button onPress={handleSubmit} text="Register" />
          </View>
        )}
      </Formik>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }}>Already registered?</Text>
        <Button style={{backgroundColor:'red'}} onPress={() => navigation.navigate('SignIn')} text="Sign In" />
      </View>
    </View >
  )
}

export default SignUp