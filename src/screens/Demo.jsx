import {
  View, Text, StatusBar, TouchableOpacity, Modal,
} from 'react-native';
import React, { useState } from 'react';

export default function Demo(props) {
  const { navigation } = props;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
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
          <View>
            <Text className="text-white">Hello World!</Text>
          </View>
          <TouchableOpacity onPress={() => toggleModal()}>
            <Text className="text-white">Toggle Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity className="bg-slate-500" onPress={() => { toggleModal(); }}>
        <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
          Hello world
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}
