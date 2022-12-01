import {
  StyleSheet, View,
} from 'react-native';
import List from './List';

function ChatList() {
  return (
    <View className="px-7 pt-10" style={style.contaner}>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </View>

  );
}
const style = StyleSheet.create({
  contaner: {
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
export default ChatList;
