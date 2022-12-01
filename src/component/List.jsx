import {
  View, Text, Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function List(props) {
  const data = props;
  return (
    <View className=" flex-row w-full justify-between   items-center my-1 py-1">
      <View className="flex-row items-center">
        <View>
          <Image className="w-11 h-11 rounded-full" source={require('../assets/image1.png')} />

        </View>
        <View>
          <View className="flex-row gap-1 pb-0 items-baseline">
            <Text className="text-xl font-bold text-start ml-0">
              {' '}
              {data.title}
            </Text>
            <Text className="text-xs text-gray-400">
              {data.Jarak}
              {' '}
              KM
            </Text>
          </View>
          <Text className="pl-1.5 text-gray-400">
            {data.Status}
            {' '}
          </Text>
        </View>
      </View>
      <View className="self-end rounded bg-orange-400 pl-2 pr-1 py-1">
        <MaterialIcons name="send" size={24} color="white" />
      </View>
    </View>
  );
}

export default List;
