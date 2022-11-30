import {
  StyleSheet, Text, View, Button, Image, StatusBar, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Welcome(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View className="bg-slate-100 flex-1 justify-center items-center">
        <Image className="w-28 h-28" source={require('../assets/finally.png')}/>
        <Text className="font-bold text-3xl pt-4">Finally</Text>
        <Text className="font-bold text-2xl pt-48 px-10 text-center">Temukan dan ngobrol dengan orang terkedat anda!</Text>
        <TouchableOpacity onPress={() => press.toLoginScreen()}><Text>Mulai</Text></TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
