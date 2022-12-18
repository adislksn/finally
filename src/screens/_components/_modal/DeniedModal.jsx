import { View, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import Btn from '../Btn';

export default function DeniedModal(props) {
  const press = props;

  return (
    <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
      <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
        <View className="flex flex-col justify-center items-center m-3">
          <Feather name="x" size={70} color="gray" />
        </View>
        <View className="">
          <Text className="font-normal text-red-500 text-center">
            Permintaan Ditolak!
          </Text>
        </View>
        <View className="w-full">
          <Btn
            text="tutu"
            click={press.click.toggleModal}
          />
        </View>
      </View>
    </View>
  );
}
