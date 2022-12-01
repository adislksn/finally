/* eslint-disable import/no-unresolved */
import React from 'react';
import { INITIAL_SCREEN } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Maps, Home, Login, Welcome, Profile, Register, ChatRoom,
} from './screens';

const initialScreenName = INITIAL_SCREEN || 'Welcome';
const Stack = createNativeStackNavigator();
console.log('Show Screen:', initialScreenName);

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={INITIAL_SCREEN} screenOptions={{ headerShown: false }}>
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
