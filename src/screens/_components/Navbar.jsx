import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import {
  Text, StyleSheet, View, TouchableOpacity,
} from 'react-native';

export default function Btn(props) {
  const { navigation, showNav } = props;
  if (!showNav) return null;

  return (
    <View style={style.wrapper}>

      <TouchableOpacity activeOpacity={0.3} onPress={() => { navigation.navigate('Profile'); }}>
        <View className="flex-row items-center py-2 px-6">
          <FontAwesome5 name="user-edit" size={18} color="#9796A1" />
          <Text className="pl-3" style={style.textNav}>Profile Saya</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
        <View className="flex-row items-center py-2 px-6">
          <FontAwesome5 name="cog" size={18} color="#9796A1" />
          <Text className="pl-4" style={style.textNav}>Pengaturan</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
        <View className="flex-row items-center py-2 px-6">
          <AntDesign name="questioncircle" size={18} color="#9796A1" />
          <Text className="pl-4" style={style.textNav}>Tentang</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate('Login')}>
        <View className="flex-row items-center py-2 px-6">
          <FontAwesome5 name="power-off" size={18} color="#9796A1" />
          <Text className="pl-4" style={style.textNav}>Keluar</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 90,
    right: 24,
    width: 190,
    backgroundColor: '#fff',
    paddingVertical: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  textNav: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
});
