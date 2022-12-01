import {
  View, KeyboardAvoidingView, TextInput, Image, Text, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Btn from '../component/Btn';

function Register(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    createAccount() {
      navigation.navigate('Login');
    },

    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View className="flex-1 bg-white py-14 px-7 items-center">
      <Image className="w-44 h-44 mt-14" source={require('../assets/finally.png')} />
      <KeyboardAvoidingView className="z-20 w-full relative justify-center self-center">
        <View className="items-start px-8 bg-white rounded-xl py-5 shadow-2xl">
          <View className="flex-row rounded-md border border-slate-700 p-3 w-full items-center my-5">
            <FontAwesome5 name="user-alt" size={20} color="#FCAF39" />
            <TextInput className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Name" />
          </View>

          <View className="flex-row rounded-md border border-slate-700 p-3 w-full items-center my-5">
            <FontAwesome5 name="user-astronaut" size={20} color="#FCAF39" />
            <TextInput className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Username" />
          </View>

          <View className="flex-row rounded-md border border-slate-700 p-3 w-full items-center my-5">
            <FontAwesome5 name="lock" size={20} color="#FCAF39" />
            <TextInput className="pl-4 placeholder:text-xs placeholder:text-black" placeholder="Masukkan Tanggal Keberangkatan" />
          </View>

          <View className="w-full py-6">
            <Btn text="Sign Up" pindah={press.createAccount} />
          </View>
        </View>
      </KeyboardAvoidingView>
      <View className="flex-row">
        <Text>sudah memiliki akun? </Text>
        <TouchableOpacity onPress={() => press.toLoginScreen()}>
          <Text className="text-blue-600">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
