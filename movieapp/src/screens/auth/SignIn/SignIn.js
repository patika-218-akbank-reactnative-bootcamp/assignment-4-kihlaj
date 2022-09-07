import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';

import styles from './SignIn.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'


const SignIn = () => {
  function handleLogin(values) {
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../../assets/movieapp-logo.png')} />
      </View>
      <Formik
        initialValues={{ username: '', email: '', password: '', passwordAgain: '', }}
        onSubmit={handleLogin}
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
    </View >

  )
}

export default SignIn