import delay from 'delay';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, KeyboardAvoidingView, TextInput, Image, Text, TouchableOpacity, StyleSheet, Platform,
} from 'react-native';
import Btn from './_components/Btn';
import {
  setForm, setBtn, setMessage, resetState,
} from '../redux/features/formRegister';

function MessageView(props) {
  const { message } = props;
  const { error, success } = message;
  if (error) return <Text className="text-rose-700">{ error }</Text>;
  if (success) return <Text className="text-emerald-600">{ success }</Text>;
  return null;
}

function Register(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const formRegister = useSelector((state) => state.formRegister);

  // Handle press events.
  const press = {
    async createAccount() {
      const url = '/api/users/register';
      const body = formRegister.form;
      dispatch(setBtn({ disabled: true, value: 'Loading...' }));
      dispatch(setMessage({}));
      await axios.post(url, body).then(({ data }) => {
        dispatch(setMessage({ success: data.msg }));
        (async () => {
          await delay(600);
          navigation.navigate('Login');
          dispatch(resetState());
        })();
      }).catch(({ response }) => {
        dispatch(setMessage({ error: response.data.msg }));
      });
      dispatch(setBtn({ disabled: false, value: 'Sign Up' }));
    },

    toLoginScreen() {
      navigation.navigate('Login');
    },
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-3 px-2 items-center">

        <Image className="w-24 h-24 mt-14" source={require('../assets/finally.png')} />

        <Text className="text-4xl mt-16" style={style.textTitle}>Register</Text>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="z-20 w-full justify-center self-center">
          <View className="items-start px-8 bg-white rounded-xl py-5 shadow-2xl">

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="user-alt" size={17} style={style.inputIcon} />
              <TextInput
                value={formRegister.form.name}
                onChangeText={(value) => dispatch(setForm({ key: 'name', value }))}
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Name"
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="user-astronaut" size={17} style={style.inputIcon} />
              <TextInput
                value={formRegister.form.username}
                onChangeText={(value) => dispatch(setForm({ key: 'username', value }))}
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Username"
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="lock" size={17} style={style.inputIcon} />
              <TextInput
                value={formRegister.form.password}
                onChangeText={(value) => dispatch(setForm({ key: 'password', value }))}
                secureTextEntry
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Password"
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center my-4 bg-gray-100">
              <FontAwesome5 name="lock" size={17} style={style.inputIcon} />
              <TextInput
                value={formRegister.form.passwordRepeat}
                onChangeText={(value) => dispatch(setForm({ key: 'passwordRepeat', value }))}
                secureTextEntry
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                placeholder="Repeat Password"
              />
            </View>

            <View>
              <MessageView message={formRegister.message} />
            </View>

            <View className="w-full">
              <Btn text={formRegister.btn.value} click={press.createAccount} />
            </View>

          </View>
        </KeyboardAvoidingView>

        <View className="flex-row mb-5">
          <Text>Sudah memiliki akun? </Text>
          <TouchableOpacity onPress={() => press.toLoginScreen()}>
            <Text className="text-blue-600">Login</Text>
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

export default Register;
