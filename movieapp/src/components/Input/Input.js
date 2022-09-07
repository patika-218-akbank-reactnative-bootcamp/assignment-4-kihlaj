import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Input.style'

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder={placeholder} onChangeText={onChangeText} value={value} />
    </View>
  )
}

export default Input