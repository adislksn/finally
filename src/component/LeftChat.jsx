import {
  View, Text, StyleSheet,
} from 'react-native';

function LeftChat(props) {
  const dataChat = props;
  return (
    <View className="items-baseline" style={styles.ChatBox}>
      <View className="mt-6 ml-3 px-6 py-3 bg-gray-300 rounded-t-2xl rounded-br-2xl">
        <Text className="">{dataChat.Text}</Text>

      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  ChatBox: {
    maxWidth: 300,
  },
});

export default LeftChat;
