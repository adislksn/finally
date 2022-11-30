import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/Navigator';

function App() {
  return (
    <View style={style.container}>
      <StatusBar style="light" />
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
