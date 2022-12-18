import {
  View, Text, Image, Modal,
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Btn from '../Btn';

export default function ApprovalRequest(props) {
  const { showed, setter } = props;
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  return (
    <Modal visible={showed} animationType="slide" transparent>
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
        <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
          <View className="flex flex-col justify-center items-center m-3">
            <Image className="w-20 h-20 rounded-full" source={require('../../../assets/image1.png')} />
          </View>
          <View className="flex flex-row gap-2 items-baseline justify-center">
            <Text className="font-bold text-xl">{ chat.friend.name }</Text>
            <Text className="text-xs text-gray-400">240km</Text>
          </View>
          <View className="pt-3 pb-0">
            <Text className="font-light text-gray-500">
              { chat.friend.message }
            </Text>
          </View>
          <View className="flex flex-row justify-center items-baseline gap-x-2">
            <View className="w-6/12">
              <Btn
                text="Tolak"
                click={() => setter(false)}
              />
            </View>
            <View className="w-6/12">
              <Btn
                text="Terima"
                click={() => setter(false)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
