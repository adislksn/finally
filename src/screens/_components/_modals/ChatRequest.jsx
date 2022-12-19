import {
  View, Text, Image, TouchableOpacity, TextInput, Modal,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import floor from 'floor';
import axios from 'axios';
import { setSendRequestMessage, setSendRequestBtn } from '../../../redux/features/chat';
import Btn from '../Btn';
import { events } from '../../../helpers';

const stringLimiter = (string, limit = 4) => {
  if (!string) return null;
  const len = string.length;
  if (len > limit) return `${string.slice(0, limit)}...`;
  return string;
};

export default function ModalChatRequest(props) {
  const { showed, setter } = props;
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);
  const { friend } = chat;
  const noImage = require('../../../assets/default-pic.jpg');
  const imageProfile = friend.picture !== null ? { uri: friend.picture } : noImage;

  const press = {
    async sendChatRequest() {
      const url = `/api/friends/${friend._id}/chats/request`;
      const body = chat.sendRequest.form;
      dispatch(setSendRequestBtn({ disabled: true, value: 'Meminta...' }));
      await axios.post(url, body).then(({ data }) => {
        setter(false);
        events.emit('modal:open-waiting-approved', data);
      }).catch(() => {});
      dispatch(setSendRequestBtn({ disabled: false, value: 'Kirim' }));
    },
  };

  return (
    <Modal visible={showed} animationType="slide" transparent>
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
        <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
          <View className="w-full">

            <View className="flex-row w-full relative justify-between my-1 py-1">

              <View className="flex-row items-center">

                <Image className="w-10 h-10 rounded-full" source={imageProfile} />

                <View className="ml-3 -mt-1">
                  <View className="flex-row gap-1 pb-0 items-baseline">
                    <Text style={{ fontSize: 16 }} className="font-bold text-start ml-0">{stringLimiter(friend.name, 17)}</Text>
                    <Text className="text-xs text-gray-400">{`${floor(friend.distance, -2)} KM`}</Text>
                  </View>
                  <Text className="text-gray-400">{stringLimiter(friend.description, 26) || '~'}</Text>
                </View>

              </View>

              <TouchableOpacity onPress={() => { setter(false); }}>
                <Feather name="x" size={30} color="gray" />
              </TouchableOpacity>

            </View>
          </View>
          <View className="pt-3 pb-0">
            <TextInput
              className="font-normal text-slate-800 py-3 px-2 rounded-lg bg-gray-300 align-top"
              multiline
              numberOfLines={4}
              placeholder="Tuliskan pesan..."
              style={{ textAlignVertical: 'top' }}
              onChangeText={((value) => dispatch(setSendRequestMessage(value)))}
            />
          </View>
          <View className="w-full">
            <Btn
              disabled={chat.sendRequest.btn.disabled}
              text={chat.sendRequest.btn.value}
              click={press.sendChatRequest}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
