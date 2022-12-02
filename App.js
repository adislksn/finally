import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './src/Navigator';

SplashScreen.preventAutoHideAsync();

function App() {
  // Load fonts.
  const [fontsLoaded] = useFonts({
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist/Urbanist-Medium.ttf'),
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist/Urbanist-Bold.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  // Render screen.
  return (
    <View style={style.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
  },
});

export default App;
