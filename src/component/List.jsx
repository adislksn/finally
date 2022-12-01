import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function List() {
  return (
    <TouchableOpacity className=" flex-row justify-between w-full items-center my-1 p-1">
      <View className="flex-row gap-3 items-center">
        <Image className="w-11 h-11 rounded-full" source={require('../assets/image1.png')} />
        <View>
          <View className="flex-row gap-1 pb-0 items-baseline">
            <Text className="text-xl font-bold text-start">Adi Sulaksono</Text>
            <Text className="text-xs text-gray-400">3.40KM</Text>
          </View>
          <Text className=" text-gray-400">Sedang galau nich</Text>
        </View>
      </View>
      <View className="rounded bg-orange-400 pl-2 pr-1 py-1">
        <MaterialIcons name="send" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default List;
