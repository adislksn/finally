import {
  View, Text, StatusBar, TouchableOpacity, Modal,
} from 'react-native';
import React, { useState } from 'react';

// import ReciveModal from './_components/_modals/ReciveModal';
// import SendModal from './_components/_modals/SendModal';
// import LoadModal from './_components/_modals/LoadModal';
// import DeniedModal from './_components/_modals/DeniedModal';
import ModalChatRequest from './_components/_modals/ChatRequest';

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

      <ModalChatRequest showed={showModal} setter={setShowModal} />

      {/* <Modal
        animationType="slide"
        transparent
        visible={showModal}
      >
        <ReciveModal click={press} />
        <SendModal click={press} />

      </Modal> */}

      <TouchableOpacity className="bg-slate-500" onPress={() => { press.toggleModal(); }}>
        <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
          Hello world
        </Text>
      </TouchableOpacity>

    </View>
  );
}
