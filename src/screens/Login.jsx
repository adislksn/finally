import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function Login(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    login() {
      navigation.navigate('Home');
    },

    toRegisterScreen() {
      navigation.navigate('Register');
    },
  };

  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN</Text>
      <Button title="Register" onPress={() => press.toRegisterScreen()} />
      <Button title="Login" onPress={() => press.login()} />
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

export default Login;
