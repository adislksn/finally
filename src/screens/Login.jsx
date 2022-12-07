import {
  Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Btn from './_components/Btn';

function Login(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    login() {
      navigation.navigate('Home');
    },

    toRegisterScreen() {
      navigation.navigate('Register');
    },
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-3 px-2 items-center">

        <Image className="w-24 h-24 mt-14" source={require('../assets/finally.png')} />

        <Text className="text-4xl mt-16" style={style.textTitle}>Login</Text>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="z-20 w-full justify-center self-center">
          <View className="items-start px-8 bg-white rounded-xl py-5 shadow-2xl">

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="user-astronaut" size={17} style={style.inputIcon} />
              <TextInput className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder="Username" />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="lock" size={17} style={style.inputIcon} />
              <TextInput secureTextEntry className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder="Password" />
            </View>

            <View className="w-full">
              <Btn text="Login" pindah={press.login} />
            </View>

          </View>
        </KeyboardAvoidingView>

        <View className="flex-row mb-5">
          <Text>Belum memiliki akun? </Text>
          <TouchableOpacity onPress={() => press.toRegisterScreen()}>
            <Text className="text-blue-600">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textTitle: {
    fontFamily: 'Urbanist-Bold',
  },
  inputIcon: {
    color: '#C5C5C7',
    paddingHorizontal: 4,
  },
});

export default Login;
