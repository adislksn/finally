import {
  View, Text, Image, TouchableOpacity, TextInput,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import Btn from '../Btn';

export default function SendModal(props) {
  const press = props;

  const pressed = {
    sendChat() {
      console.log('send chat');
    },
  };
  return (
    <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
      <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
        <View className="w-full">

          <View className="flex-row w-full relative justify-between my-1 py-1">

            <View className="flex-row items-center">

              <Image className="w-12 h-12 rounded-full" source={require('../../../assets/image1.png')} />

              <View className="ml-3 -mt-1">
                <View className="flex-row gap-1 pb-0 items-baseline">
                  <Text className="text-lg font-bold text-start ml-0">MasQ</Text>
                  <Text className="text-xs text-gray-400">200 KM</Text>
                </View>
                <Text className="text-gray-400">gak ada yang lain</Text>
              </View>

            </View>

            <TouchableOpacity onPress={() => { press.click.toggleModal(); }}>
              <Feather name="x" size={30} color="gray" />
            </TouchableOpacity>

          </View>
        </View>
        <View className="pt-3 pb-0">
          <TextInput
            className="font-normal text-slate-800 py-3 px-2 rounded-lg bg-gray-300 align-top"
            multiline
            numberOfLines={4}
            style={{ textAlignVertical: 'top' }}
          />
        </View>
        <View className="w-full">
          <Btn
            text="krirm"
            click={pressed.sendChat()}
          />
        </View>
      </View>
    </View>
  );
}
