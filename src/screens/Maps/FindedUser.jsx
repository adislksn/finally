import floor from 'floor';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const stringLimiter = (string, limit = 4) => {
  if (!string) return null;
  const len = string.length;
  if (len > limit) return `${string.slice(0, limit)}...`;
  return string;
};

export default function FindedUser(props) {
  const {
    picture, name, status, distance,
  } = props;
  const noImage = require('../../assets/default-pic.jpg');
  const imageProfile = picture !== null ? { uri: picture } : noImage;

  return (
    <View className="flex-row w-full relative items-center my-1 py-1">

      <View className="flex-row items-center">

        <Image className="w-12 h-12 rounded-full" source={imageProfile} />

        <View className="ml-3 -mt-1">
          <View className="flex-row gap-1 pb-0 items-baseline">
            <Text style={{ fontSize: 16 }} className="font-bold text-start ml-0">{stringLimiter(name, 20)}</Text>
            <Text className="text-xs text-gray-400">{`${floor(distance, -2)} KM`}</Text>
          </View>
          <Text className="text-gray-400">{stringLimiter(status, 26) || '~'}</Text>
        </View>

      </View>

      <View className="rounded bg-orange-400 pl-2 pr-2 py-2" style={style.button}>
        <MaterialIcons name="send" size={18} color="white" />
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
