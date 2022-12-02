import {
  StyleSheet, View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FindedUser from './FindedUser';

export default function FindingBox(props) {
  const { navigation } = props;
  return (
    <View className="w-full absolute bottom-0" style={styles.wrapper}>

      <TouchableOpacity activeOpacity={0.7} className="items-center mb-1">
        <MaterialIcons name="keyboard-arrow-up" size={34} color="#434343" />
        <Text className="-mt-2" style={styles.textSwipe}>Teman Ditemukan</Text>
      </TouchableOpacity>

      <ScrollView className="px-5 pt-2 w-full">
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { navigation.navigate('ChatRoom'); }}>
          <FindedUser name="Masqomar.21" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Fanesa Hadi Pra..." status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Adi Sulaksono " status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Masqomar.21" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Devi Kurnia" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Adli Mustofa" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full" onPress={() => { }}>
          <FindedUser name="Masqomar.21" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="w-full mb-10" onPress={() => { }}>
          <FindedUser name="Masqomar.21" status="lagi galau nich" distance="3.20" />
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  textSwipe: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
