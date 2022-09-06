import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { Theme, useThemeContext } from '../../context/themeContext';
// import { useUserContext } from '../../context/userContext';
import AuthNavigator from '../auth';
import HomeNavigator from '../home';


const MainNavigator = () => {
  // const { user } = useUserContext();
  // const { colors, theme } = useThemeContext();
  let user = false;
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator