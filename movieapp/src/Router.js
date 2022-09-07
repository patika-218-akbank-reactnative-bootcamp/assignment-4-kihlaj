import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigation/auth'
import HomeNavigator from './navigation/home'


const Router = () => {
  let isSignedIn = false;
  return (
    <NavigationContainer>
      {isSignedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default Router