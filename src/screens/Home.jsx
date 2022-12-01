import {
  StyleSheet, Text, View, Image, StatusBar, TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Slider } from 'react-input-slider';
import Btn from '../component/Btn';

function Home(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    logout() {
      navigation.navigate('Login');
    },

    toProfile() {
      navigation.navigate('Profile');
    },

    toMaps() {
      navigation.navigate('Maps');
    },
  };

  return (
    <View className="flex-1 bg-white py-10 px-7">
      <StatusBar style="dark" />
      <View className="flex-row items-center w-full justify-between">
        <Image className="w-11 h-11" source={require('../assets/finally.png')} />
        <TouchableOpacity className="">
          <MaterialIcons name="menu" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-center text-2xl pt-20 ">Tentukan jarak pencarian anda! Anda dapat menjangkau hingga radius 100 KM.</Text>
      
      <View className="items-center justify-center pt-10">
        <View className="rounded-full border-orange-400 border-2 p-3">
          <View className="rounded-full border-orange-400 border-4 p-3 w-max">
            <View className="rounded-full border-orange-400 border-8 w-36 h-36 p-3 justify-center items-center">
              <Text className="text-xl">20 KM</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
      <Btn text="Profile" pindah={press.toProfile}/>
      <Btn text="Cari Teman" pindah={press.toMaps} />
      <Btn text="Keluar" pindah={press.logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
