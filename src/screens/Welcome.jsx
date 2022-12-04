import {
  StyleSheet, Text, View, Image, StatusBar,
} from 'react-native';
import Btn from './_components/Btn';

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
      <Text className="text-4xl pt-5" style={style.textLogo}>Finally</Text>
      <Text className="text-2xl pt-40 text-center" style={style.textBanner}>Temukan dan ngobrol dengan orang terkedat anda!</Text>
      <View className="w-full">
        <Btn text="Mulai" pindah={press.toLoginScreen} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textLogo: {
    fontFamily: 'Urbanist-Bold',
    letterSpacing: 4,
  },
  textBanner: {
    fontFamily: 'Urbanist-Medium',
    lineHeight: 26,
    color: '#212121',
  },
});

export default Welcome;
