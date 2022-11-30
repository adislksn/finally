import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function Register(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    createAccount() {
      navigation.navigate('Login');
    },

    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View style={styles.container}>
      <Text>REGISTER SCREEN</Text>
      <Button title="Register" onPress={() => press.createAccount()} />
      <Button title="Login" onPress={() => press.toLoginScreen()} />
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

export default Register;
