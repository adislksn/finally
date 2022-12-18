import {
  View, Text, StatusBar, TouchableOpacity, Modal, Image,
} from 'react-native';
import React, { useState } from 'react';

import Btn from './_components/Btn';

export default function Demo(props) {
  const { navigation } = props;

  const [showModal, setShowModal] = useState(false);

  const press = {
    toggleModal() {
      setShowModal(!showModal);
    },

    goToChatbox() {
      navigation.navigate('ChatRoom');
    },
  };

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar />
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
      >
        <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
          <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
            <View className="flex flex-col justify-center items-center m-3">
              <Image className="w-20 h-20 rounded-full" source={require('../assets/image1.png')} />
            </View>
            <View className="flex flex-row gap-2 items-baseline justify-center">
              <Text className="font-bold text-xl">MasQ</Text>
              <Text className="text-xs text-gray-400">240km</Text>
            </View>
            <View className="pt-3 pb-0">
              <Text className="font-light text-gray-500">
                Halo apa kabar
              </Text>
            </View>
            <View className="flex flex-row justify-center items-baseline gap-x-2">
              <View className="w-6/12">
                <Btn
                  text="Tolak"
                  click={press.toggleModal}
                />
              </View>
              <View className="w-6/12">
                <Btn
                  text="Terima"
                  click={press.goToChatbox}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity className="bg-slate-500" onPress={() => { press.toggleModal(); }}>
        <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
          Hello world
        </Text>
      </TouchableOpacity>

    </View>
  );
}
