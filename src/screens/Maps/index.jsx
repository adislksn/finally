import { SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import FindingBox from './FindingBox';
import Header from '../_components/Header';

function Maps(props) {
  const { navigation } = props;

  return (
    <SafeAreaView className="flex-1 bg-white">

      <Header title="Mencari Teman" backTo="Home" navigation={navigation} />

      <MapView
        className="flex-1"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Titik satu"
          description="Air panas-air panas"
        />
        <Marker
          coordinate={{
            latitude: 37.76655,
            longitude: -122.4324,
          }}
          title="Titik kedua"
          description="Air dingin-air dingin"
        />
      </MapView>

      <FindingBox navigation={navigation} />

    </SafeAreaView>
  );
}

export default Maps;
