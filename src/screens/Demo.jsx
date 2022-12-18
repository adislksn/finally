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
      
    </View>
  );
}
