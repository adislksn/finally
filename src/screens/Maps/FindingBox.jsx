import { useSelector } from 'react-redux';
import {
  StyleSheet, View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FindedUser from './FindedUser';
import { events } from '../../helpers';

function FindedUserItems(props) {
  const { myFriends } = props;
  const formSearch = useSelector((state) => state.formSearch);

  const press = {
    openModalChatRequest(friend) {
      events.emit('modal:open-chat-request', friend);
    },
  };

  if (!myFriends.length) {
    return (
      <View className="w-full">
        <Text className="text-center italic">
          Tidak ada teman online pada radius
          {' '}
          { formSearch.form.radius }
          {' '}
          KM.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {myFriends.map((friend) => (
        <TouchableOpacity
          className="w-full"
          key={friend._id}
          activeOpacity={0.7}
          onPress={() => press.openModalChatRequest(friend)}
        >
          <FindedUser
            picture={friend.picture}
            name={friend.name}
            status={friend.description}
            distance={friend.distance}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function FindingBox() {
  const formSearch = useSelector((state) => state.formSearch);

  return (
    <View className="w-full absolute bottom-0" style={styles.wrapper}>

      <TouchableOpacity activeOpacity={0.7} className="items-center mb-1">
        <MaterialIcons name="keyboard-arrow-up" size={34} color="#434343" />
        <Text className="-mt-2" style={styles.textSwipe}>Teman Ditemukan</Text>
      </TouchableOpacity>

      <ScrollView className="px-5 pt-2 w-full">
        <FindedUserItems myFriends={formSearch.friends} />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  textSwipe: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
