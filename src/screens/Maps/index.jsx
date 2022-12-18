import { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import FindingBox from './FindingBox';
import { events } from '../../helpers';
import Header from '../_components/Header';
import ModalChatRequest from '../_components/_modals/ChatRequest';
import { setFriend } from '../../redux/features/chat';

function Maps(props) {
  const { navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const formSearch = useSelector((state) => state.formSearch);
  const myLocations = user.data.locations;
  const myFriends = formSearch.friends;

  const onLayoutView = useCallback(() => {
    events.on('modal:chat-request', (friend) => {
      dispatch(setFriend(friend));
      setShowModal(true);
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
          <View>
            <Image source={require('../../assets/myPinMarker.png')} />
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

      <ModalChatRequest showed={showModal} setter={setShowModal} />

    </View>
  );
}

export default Maps;
