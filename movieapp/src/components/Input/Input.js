import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Input.style'

const Input = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

export default Input