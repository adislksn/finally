import {
  View, Text, StatusBar, TouchableOpacity, Modal,
} from 'react-native';
import React, { useState } from 'react';

// import ModalChatRequest from './_components/_modals/ChatRequest';
// import ModalApprovalRequest from './_components/_modals/ApprovalRequest';
// import ModalWaitingApproved from './_components/_modals/WaitingApproved';
import ModalDeniedRequest from './_components/_modals/DeniedRequest';

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

      {/* <ModalChatRequest showed={showModal} setter={setShowModal} /> */}
      {/* <ModalApprovalRequest showed={showModal} setter={setShowModal} /> */}
      {/* <ModalWaitingApproved showed={showModal} setter={setShowModal} /> */}
      <ModalDeniedRequest showed={showModal} setter={setShowModal} />

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
