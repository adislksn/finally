import {
  View, Text, Image, Modal,
} from 'react-native';
import Btn from '../Btn';
import socket from '../../../socket';

export default function ModalWaitingApproved(props) {
  const { showed, setter } = props;

  return (
    <Modal visible={showed} animationType="slide" transparent>
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)' }}>
        <View className="bg-white w-11/12 rounded-2xl  justify-center p-5">
          <View className="flex flex-col justify-center items-center">
            <Image className="w-40 h-40 rounded-full" source={require('../../../assets/load.gif')} />
          </View>
          <View className="">
            <Text className="font-normal text-gray-400 text-center">
              Menunggu Persetujuan..
            </Text>
          </View>
          <View className="w-full">
            <Btn
              text="Berhenti Menunggu"
              click={() => {
                socket.disconnect();
                setter(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
