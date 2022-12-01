import {
  View, Text,
} from 'react-native';

function RightChat(props) {
  const dataChat = props;
  return (
    <View className="items-end mt-6 mr-3">
      <View className="items-baseline">
        <View className=" px-6 py-3 bg-gray-300 rounded-t-2xl rounded-bl-2xl">
          <Text className="">{dataChat.Text}</Text>
        </View>
      </View>
    </View>

  );
}

export default RightChat;
