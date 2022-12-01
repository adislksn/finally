import {
  Text, View, Image, StatusBar, TouchableOpacity,
} from 'react-native';
import Btn from '../component/Btn';
// import { LinearGradient } from 'expo-linear-gradient';

function Welcome(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View className="bg-slate-100 mx-10 flex-1 justify-center items-center">
      <Image className="w-44 h-44 mt-32" source={require('../assets/finally.png')} />
      <Text className="font-bold text-3xl pt-4">Finally</Text>
      <Text className="font-bold  text-2xl pt-40  text-center">Temukan dan ngobrol dengan orang terkedat anda!</Text>
      {/* <TouchableOpacity onPress={() => press.toLoginScreen()}><Text>Mulai</Text></TouchableOpacity> */}
      <StatusBar style="auto" />
      <View className="w-full">
        <Btn text="Mulai" pindah={press.toLoginScreen} />
      </View>
    </View>
  );
}

export default Welcome;
