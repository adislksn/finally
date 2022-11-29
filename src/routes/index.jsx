import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
}

export default Routes;
