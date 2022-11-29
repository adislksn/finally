import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maps from './screens/Maps';
import Home from './screens/Home';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import Register from './screens/Register';
import ChatRoom from './screens/ChatRoom';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
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
