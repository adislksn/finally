import { MaterialIcons } from '@expo/vector-icons';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

export default function Header(props) {
  const { navigation, title, backTo } = props;
  if (!title) return null;
  return (
    <View className="flex-row items-center mt-7">
      <TouchableOpacity className="pl-5 absolute z-50 top-3" onPress={() => navigation.navigate(backTo)}>
        <MaterialIcons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <Text className="w-full text-center mr-5 py-3" style={style.title}>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
  },
});
