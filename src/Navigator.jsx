/* eslint-disable import/no-unresolved */
import React from 'react';
import axios from 'axios';
import { INITIAL_SCREEN, BASE_URL } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Maps, Home, Login, Welcome, Profile, Register, ChatRoom,
} from './screens';

// Set axios configs.
axios.defaults.baseURL = BASE_URL || 'http://localhost:8000';

function Routes() {
  const initialScreenName = INITIAL_SCREEN || 'Welcome';
  const Stack = createNativeStackNavigator();
  // eslint-disable-next-line no-console
  if (INITIAL_SCREEN) console.log('> Show Screen:', INITIAL_SCREEN);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialScreenName} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
