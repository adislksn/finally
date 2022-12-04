import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FindedUser(props) {
  const { name, status, distance } = props;
  return (
    <View className="flex-row w-full relative items-center my-1 py-1">

      <View className="flex-row items-center">

        <Image className="w-12 h-12 rounded-full" source={require('../../assets/image1.png')} />

        <View className="ml-3 -mt-1">
          <View className="flex-row gap-1 pb-0 items-baseline">
            <Text className="text-lg font-bold text-start ml-0">{name}</Text>
            <Text className="text-xs text-gray-400">{`${distance} KM`}</Text>
          </View>
          <Text className="text-gray-400">{status}</Text>
        </View>

      </View>

      <View className="rounded bg-orange-400 pl-2 pr-1 py-1" style={style.button}>
        <MaterialIcons name="send" size={20} color="white" />
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    top: 6,
  },
});
