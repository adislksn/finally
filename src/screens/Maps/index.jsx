import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FindingBox from './FindingBox';
import Header from '../_components/Header';

function Maps(props) {
  const { navigation } = props;
  const markerLocation = [
    {
      id: 0,
      latitude: 37.70825,
      longitude: -122.4324,
      tittle: 'nama',
      description: 'bio',
    },
    {
      id: 1,
      latitude: 37.7655,
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
        {markerLocation.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
          />
        ))}
      </MapView>

      <FindingBox navigation={navigation} />

    </View>
  );
}

export default Maps;
