import delay from 'delay';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';
import Btn from './_components/Btn';
import {
  setForm, setBtn, setMessage, resetState,
} from '../redux/features/formLogin';

function MessageView(props) {
  const { message } = props;
  const { error, success } = message;
  if (error) return <Text className="text-rose-700">{ error }</Text>;
  if (success) return <Text className="text-emerald-600">{ success }</Text>;
  return null;
}

function Login(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const formLogin = useSelector((state) => state.formLogin);

  // Handle press events.
  const press = {
    async login() {
      const url = '/api/auth/login';
      const body = formLogin.form;
      dispatch(setBtn({ disabled: true, value: 'Autentikasi...' }));
      dispatch(setMessage({}));
      await axios.post(url, body).then(async ({ data }) => {
        dispatch(setMessage({ success: data.msg }));
        (async () => {
          await delay(250);
          navigation.navigate('Home');
          await delay(5000);
          dispatch(resetState());
        })();
        await delay(5000);
      }).catch(({ response }) => {
        dispatch(setMessage({ error: response.data.msg }));
      });
      dispatch(setBtn({ disabled: false, value: 'Login' }));
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
              <TextInput
                value={formLogin.form.username}
                onChangeText={(value) => dispatch(setForm({ key: 'username', value }))}
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Username"
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="lock" size={17} style={style.inputIcon} />
              <TextInput
                value={formLogin.form.password}
                onChangeText={(value) => dispatch(setForm({ key: 'password', value }))}
                secureTextEntry
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Password"
              />
            </View>

            <View>
              <MessageView message={formLogin.message} />
            </View>

            <View className="w-full">
              <Btn text={formLogin.btn.value} click={press.login} />
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
