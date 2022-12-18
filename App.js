/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { BASE_URL } from '@env';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import './src/socket';
import './src/runtime';
import store from './src/redux/store';
import { events } from './src/helpers';
import Navigator from './src/Navigator';

// Set axios configs.
axios.defaults.baseURL = BASE_URL || 'http://localhost:8000';
SplashScreen.preventAutoHideAsync();

function App() {
  // Load fonts.
  const [fontsLoaded] = useFonts({
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist/Urbanist-Medium.ttf'),
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist/Urbanist-Bold.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
    events.emit('app-ready');
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  // Render screen.
  return (
    <Provider store={store}>
      <View style={style.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Navigator />
      </View>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
