import { View, Text, StyleSheet } from 'react-native';

export default function RightChat(props) {
  const { message } = props;
  return (
    <View className="items-end">
      <View className="items-baseline my-2" style={style.chatBox}>
        <View className="px-6 py-3 bg-gray-300 rounded-t-2xl rounded-bl-2xl">
          <Text>{message}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  chatBox: {
    maxWidth: 300,
  },
});
