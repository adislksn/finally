import {
  Text, View, Image, StatusBar,
} from 'react-native';
import Btn from '../component/Btn';

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
      <StatusBar style="light" />
      <Image className="w-44 h-44 mt-32" source={require('../assets/finally.png')} />
      <Text className="text-4xl pt-5" style={{ fontFamily: 'Urbanist-Bold' }}>Finally</Text>
      <Text className="text-2xl pt-40 text-center" style={{ fontFamily: 'Urbanist-Medium', lineHeight: 26 }}>Temukan dan ngobrol dengan orang terkedat anda!</Text>
      <View className="w-full">
        <Btn text="Mulai" pindah={press.toLoginScreen} />
      </View>
    </View>
  );
}

export default Welcome;
