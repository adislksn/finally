import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function ChatRoom(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },
  };

  return (
    <View style={styles.container}>
      <Text>CHAT ROOM SCREEN</Text>
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

export default ChatRoom;
