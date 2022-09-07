import { View, Text, Image } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

import styles from './SignIn.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const SignIn = ({ navigation }) => {
  const handleSignIn = (values) => { }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../../assets/movieapp-logo.png')} />
      </View>
      <Formik
        initialValues={{ username: '', email: '', password: '', passwordAgain: '', }}
        onSubmit={handleSignIn}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.body_container}>
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
            <Button onPress={handleSubmit} text="Log In" />
          </View>
        )}
      </Formik>
      <View style={{ alignItems: 'center' }}>
        <Text>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('SignUp')} text="Register" />
      </View>
    </View >
  )
}

export default SignIn