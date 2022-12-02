import { SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

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
      />

      <FindingBox navigation={navigation} />

    </SafeAreaView>
  );
}

export default Maps;
