import {
  Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView, TextInput,
} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import RightChat from './RightChat';
import LeftChat from './LeftChat';

export default function ChatRoom(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },
  };

  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="flex-row justify-start items-center bg-gray-300 mt-7 py-2">
        <TouchableOpacity className="pl-3" onPress={() => press.toHome()}>
          <MaterialIcons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <View className="pl-2 flex-row items-center gap-x-3">
          <View className="rounded-full border-orange-400 border-2">
            <Image className="w-10 h-10 rounded-full " source={require('../../assets/image2.png')} />
          </View>
          <View className="-mt-1">
            <Text className="font-bold text-lg">Adi Sulaksono</Text>
            <Text className="text-blue-500 italic">online</Text>
          </View>
        </View>
      </View>

      <View className="">

        <ScrollView className="px-3 bg-orange">
          <RightChat message="aku lagi gabut" />
          <RightChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit" />
          <LeftChat message="aku lagi gabut" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit" />
          <RightChat message="aku lagi gabut" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
          <LeftChat message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas velit aperiam quam, amet nisi, provident sunt officia soluta ipsam beatae voluptate placeat aliquid aut. Dolor qui assumenda consequatur non. Fugit error dolorem distinctio assumenda ipsum accusamus incidunt dolor. Explicabo?" />
          <View style={{ height: 300 }} />
        </ScrollView>

      </View>

      <View className="w-full bg-white absolute z-50 bottom-0 px-1 py-1">
        <View className="flex-row justify-between items-center bg-gray-300 p-2.5 rounded-xl">
          <TextInput className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder="Tulis Pesan..." />
          <TouchableOpacity activeOpacity={0.8} className="p-2 bg-orange-400 rounded-full ">
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}
