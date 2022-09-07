import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Input.style'

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
       {/* when changing theme change placeholder color to white maybe? */}
      <TextInput style={styles.text} placeholder={placeholder} onChangeText={onChangeText} value={value} placeholderTextColor="#702D59" />
    </View>
  )
}

export default Input