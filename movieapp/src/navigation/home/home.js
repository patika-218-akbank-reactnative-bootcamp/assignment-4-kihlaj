import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({
          headerStyle: { backgroundColor: '#0088CC' },
          headerTintColor: 'white',
          headerTitle: route.params.chatName,
          headerShadowVisible: false,
          headerBackVisible: true,
          headerLeft: () => (
            <Image
              source={{ uri: route.params.receiver.image }}
              style={styles.image}
            />
          ),
          headerRight: () => (
            <Icon name="dots-vertical" size={25} color="white" />
          ),
        })}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={({ route }) => ({
          headerStyle: { backgroundColor: '#0088CC' },
          headerTintColor: 'white',
          headerTitle: 'Select Theme',
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerStyle: { backgroundColor: '#0088CC' },
          headerTintColor: 'white',
          headerTitle: 'Edit Profile',
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator