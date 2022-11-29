import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function Welcome(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View style={styles.container}>
      <Text>WELCOME SCREEN</Text>
      <Button title="Mulai" onPress={() => press.toLoginScreen()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
