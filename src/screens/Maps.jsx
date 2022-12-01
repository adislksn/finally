import {
  StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import ChatList from '../component/ChatList';

function Maps(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },

    toChatRoom() {
      navigation.navigate('ChatRoom');
    },
  };

  return (
    <SafeAreaView className="">
      <StatusBar style="auto" />
      <View className=" flex-row justify-start items-center bg-white mt-7 ">
        <TouchableOpacity className="pl-3 absolute z-50" onPress={() => press.toHome()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="w-full text-center font-bold text-black mr-5 py-3 text-lg">Mencari Teman</Text>
      </View>
      <MapView
        className="w-full h-full"
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View className="absolute bottom-0" style={styles.shadow}>
        <View className="w-full justify-center items-center" style={styles.elevation}>
          <MaterialIcons name="keyboard-arrow-up" size={34} color="black" />
          <Text className="text-center font-bold pb-2">Teman Ditemukan</Text>
        </View>
        <ScrollView className="">
          <ChatList screen={press.toChatRoom} />

          {/* <Text>MAPS SCREEN</Text> */}

          {/* <Button title="Chat Room" onPress={() => press.toChatRoom()} />
        <Button title="Kembali" onPress={() => press.toHome()} /> */}
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: -999,
  },

  shadow: {
    maxHeight: 450,
    minHeight: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 48,

  },
  shadow2: {
    elevation: 48,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#00000',
  },
  fristHeight: {
    maxHeight: 950,
  },
});

export default Maps;
