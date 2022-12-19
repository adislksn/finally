import { Image, View } from 'react-native';
import { useCallback, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../socket';
import FindingBox from './FindingBox';
import { events } from '../../helpers';
import Header from '../_components/Header';
import { setFriend } from '../../redux/features/chat';
import ModalChatRequest from '../_components/_modals/ChatRequest';
import ModalDeniedRequest from '../_components/_modals/DeniedRequest';
import ModalWaitingApproved from '../_components/_modals/WaitingApproved';

function Maps(props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalWaiting, setShowModalWaiting] = useState(false);
  const [showModalDanied, setShowModalDanied] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const formSearch = useSelector((state) => state.formSearch);
  const myLocations = user.data.locations;
  const myFriends = formSearch.friends;

  const onLayoutView = useCallback(() => {
    events.on('modal:open-chat-request', (friend) => {
      dispatch(setFriend(friend));
      setShowModal(true);
    });
    events.on('modal:open-waiting-approved', (data) => {
      setShowModalWaiting(true);
      socket.on(`accept-chat:${data.data._id}`, (payload) => {
        setShowModalWaiting(false);
        if (payload.accept) {
          navigation.navigate('ChatRoom');
        } else {
          setShowModalDanied(true);
        }
      });
    });
  }, []);

  return (
    <View className="flex-1 bg-white" onLayout={onLayoutView}>

      <Header title="Mencari Teman" backTo="Home" navigation={navigation} />

      <MapView
        className="flex-1"
        initialRegion={{
          latitude: myLocations.latitude,
          longitude: myLocations.longitude,
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={user.data._id}
          coordinate={{
            latitude: myLocations.latitude,
            longitude: myLocations.longitude,
          }}
          title={user.data.name}
          description={user.data.description || '-'}
        >
          <View className="">
            <Image className="w-7 h-11 object-contain" source={require('../../assets/selfPinMarker.png')} />
          </View>
        </Marker>

        {myFriends.map((friend) => (
          <Marker
            key={friend._id}
            coordinate={{
              latitude: friend.locations.latitude,
              longitude: friend.locations.longitude,
            }}
            title={friend.name}
            description={friend.description}
          />
        ))}
      </MapView>

      <FindingBox navigation={navigation} />

      <ModalChatRequest
        showed={showModal}
        setter={setShowModal}
        navigation={navigation}
      />

      <ModalWaitingApproved
        showed={showModalWaiting}
        setter={setShowModalWaiting}
        navigation={navigation}
      />

      <ModalDeniedRequest
        showed={showModalDanied}
        setter={setShowModalDanied}
        navigation={navigation}
      />

    </View>
  );
}

export default Maps;
