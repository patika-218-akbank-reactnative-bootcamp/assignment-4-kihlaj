import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'

import styles from './SignIn.style'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const SignIn = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../../assets/movieapp-logo.png')} />
      </View>
      <View style={styles.body_container}>
        <Input placeholder="Nickname" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Password again" />
        <Button text="Sign In" />
        <Text>Movie App</Text>
      </View>
    </KeyboardAvoidingView>

  )
}

export default SignIn