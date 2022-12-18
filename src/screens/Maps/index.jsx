import { View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FindingBox from './FindingBox';
import Header from '../_components/Header';
// import {} from '../redux/features/user';

// const url = '/api/friends';
// const body = user.friends;

function Maps(props) {
  const markerLocation = [
    {
      id: 0,
      latitude: 37.78825,
      longitude: -122.4324,
      tittle: 'nama',
      description: 'bio',
    },
    {
      id: 1,
      latitude: 37.76655,
      longitude: -122.4324,
      tittle: 'nama',
      description: 'bio',
    },
    {
      id: 2,
      latitude: 37.78888,
      longitude: -122.4324,
      tittle: 'nama',
      description: 'bio',
    },
  ];
  const { navigation } = props;
  return (
    <View className="flex-1 bg-white">

      <Header title="Mencari Teman" backTo="Home" navigation={navigation} />

      <MapView
        className="flex-1"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0822,
          longitudeDelta: 0.0421,
        }}
      >
        <FlatList
          data={markerLocation}
          renderItem={({ item }) => (
            <Marker
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              title={item.tittle}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Marker
          coordinate={{ latitude: 37.76888, longitude: -122.4324 }}
          title="test"
          description="oke"
        />
      </MapView>

      <FindingBox navigation={navigation} />

    </View>
  );
}

export default Maps;
