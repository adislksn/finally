import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header(props) {
  const data = props;
  return (
    <View className=" flex-row justify-start items-center bg-white mt-7 ">
      <TouchableOpacity className="pl-3 absolute z-50" onPress={() => data.backScreen()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="w-full text-center font-bold text-black mr-5 py-3 text-lg">
        {data.title}
        {' '}
      </Text>
    </View>

  );
}

export default Header;
