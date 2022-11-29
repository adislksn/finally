import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function Maps(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },

    toChatRoom() {
      navigation.navigate('ChatRoom');
    },
  };

  return (
    <View style={styles.container}>
      <Text>MAPS SCREEN</Text>
      <Button title="Chat Room" onPress={() => press.toChatRoom()} />
      <Button title="Kembali" onPress={() => press.toHome()} />
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

export default Maps;
