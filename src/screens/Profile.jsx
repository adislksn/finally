import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { SelectList } from 'react-native-dropdown-select-list';
import {
  FontAwesome, Fontisto, MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  Image, StyleSheet, View, TouchableOpacity, TextInput, ScrollView,
} from 'react-native';
import Btn from './_components/Btn';
import Header from './_components/Header';
import { setBio, setBioBtn } from '../redux/features/user';

const genders = [
  { key: 'man', value: 'Laki Laki' },
  { key: 'woman', value: 'Perempuan' },
  { key: 'anonym', value: 'Anonymous' },
];

function Profile(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },

    // async editPicture() {
    //   const url = '/api/auth/login';
    //   const body = user.data;
    //   console.log('edit profile');
    // },

    async saveBio() {
      const url = '/api/me/bio';
      const { name, gender, description } = user.data;
      const body = { name, gender, description };
      dispatch(setBioBtn({ disabled: true, value: 'Menyimpan...' }));
      await axios.patch(url, body).catch(() => {});
      dispatch(setBioBtn({ disabled: false, value: 'Simpan' }));
    },
  };

  return (

    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="bg-white h-screen">

          <Header title="Profile Saya" backTo="Home" navigation={navigation} />

          <View className="items-center">
            <View className="my-6">
              <View className="rounded-full border-orange-400" style={{ borderWidth: 6 }}>
                <Image className="w-36 h-36 rounded-full" source={require('../assets/image2.png')} />
              </View>
              <TouchableOpacity activeOpacity={0.8} className="bg-orange-500 absolute bottom-0 right-0 p-4 rounded-full" onPress={press.editPicture}>
                <FontAwesome name="camera" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-7 pt-4">

            <View className="flex-row rounded-md p-3 w-full items-center mb-5 bg-gray-100">
              <FontAwesome name="user" size={24} style={style.inputIcon} />
              <TextInput
                className="w-10/12 pl-4 placeholder:text-s placeholder:text-black"
                onChangeText={(value) => dispatch(setBio({ key: 'name', value }))}
                placeholder="Nama"
                value={user.data.name}
              />
            </View>

            <View className="flex-row relative z-10 rounded-md p-3 w-full items-center mb-5 bg-gray-100">
              <Fontisto name="transgender" size={24} style={style.inputIcon} />
              <SelectList
                data={genders}
                save="key"
                search={false}
                boxStyles={style.selectBox}
                dropdownStyles={style.selectDropdown}
                dropdownItemStyles={style.selectItem}
                defaultOption={genders.find((item) => item.key === user.data.gender)}
                setSelected={(value) => dispatch(setBio({ key: 'gender', value }))}
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center bg-gray-100">
              <MaterialCommunityIcons name="playlist-edit" size={24} style={style.inputIcon} />
              <TextInput
                className="w-10/12 pl-1 placeholder:text-s placeholder:text-black"
                placeholder="Bio"
                onChangeText={((value) => dispatch(setBio({ key: 'description', value })))}
                value={user.data.description}
              />
            </View>

            <Btn
              disabled={user.formBio.btn.disabled}
              text={user.formBio.btn.value}
              click={press.saveBio}
            />

          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  inputIcon: {
    color: '#C5C5C7',
    paddingHorizontal: 4,
  },
  selectBox: {
    borderWidth: 0,
    position: 'absolute',
    top: -22,
    left: -8,
    width: 280,
  },
  selectDropdown: {
    position: 'absolute',
    zIndex: 10,
    top: 18,
    left: -18,
    borderColor: '#E6E6E6',
    backgroundColor: '#F1F1F1',
    width: 280,
  },
  selectItem: {
    margin: 5,
    borderRadius: 4,
    backgroundColor: '#E6E6E6',
  },
});

export default Profile;
