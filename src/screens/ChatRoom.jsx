import {
  Text, View, Image, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

// import React, { useState } from 'react';
import RightChat from '../component/RightChat';
import LeftChat from '../component/LeftChat';

function ChatRoom(props) {
  const { navigation } = props;

  // const [value, setValue] = useState;

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },
  };

  return (
    <SafeAreaView className="h-screen">
      <StatusBar style="auto" />
      <View className=" flex-row justify-start items-center bg-gray-300 mt-7 py-2">
        <TouchableOpacity className="pl-3" onPress={() => press.toHome()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View className=" pl-5 flex-row items-center gap-x-3">
          <View className="rounded-full border-orange-400 border-4">
            <Image className="w-11 h-11 rounded-full " source={require('../assets/image2.png')} />
          </View>
          <View>
            <Text className="font-bold text-lg">Adi Sulaksono</Text>
            <Text className="text-blue-500 italic">online</Text>
          </View>
        </View>
      </View>
      <ScrollView className="">
        <RightChat Text="aku lagi gabut" />
        <LeftChat Text="aku lagi gabut" />
        <RightChat Text="aku lagi gabut" />
        <LeftChat Text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
      </ScrollView>

      <View className="absolute z-50 bottom-0 px-3 py-2 w-full">
        <View className="flex-row justify-between items-center bg-gray-300 p-2.5 rounded-xl">
          <TextInput className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Tulis Pesan..." />
          <TouchableOpacity className="p-2 bg-orange-400 rounded-full ">
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChatRoom;
