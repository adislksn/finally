import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import FindingBox from './FindingBox';
import Header from '../_components/Header';

function Maps(props) {
  const { navigation } = props;
  const user = useSelector((state) => state.user);
  const formSearch = useSelector((state) => state.formSearch);
  const myLocations = user.data.locations;
  const myFriends = formSearch.friends;

  return (
    <View className="flex-1 bg-white">

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
          <View style={{ backgroundColor: 'white', padding: 10 }}>
            <Text>ME</Text>
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

    </View>
  );
}

export default Maps;
