import React, { useState } from 'react';
import {
  Image, StyleSheet, View, TouchableOpacity, TextInput, ScrollView,
} from 'react-native';
import {
  FontAwesome, Fontisto, MaterialCommunityIcons,
} from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import Btn from './_components/Btn';
import Header from './_components/Header';

const genders = [
  { key: 'man', value: 'Laki Laki' },
  { key: 'woman', value: 'Perempuan' },
  { key: 'anonym', value: 'Anonymous' },
];

function Profile(props) {
  const { navigation } = props;
  const [gender, setGender] = useState('anonym');

  // Handle press events.
  const press = {
    toHome() {
      navigation.navigate('Home');
    },

    editPicture() {
      console.log('edit profile');
    },

    save() {
      console.log('disimpan');
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

            <View className="flex-row rounded-md p-3 w-full items-center mb-5" style={style.inputWrapper}>
              <FontAwesome name="user" size={24} style={style.inputIcon} />
              <TextInput className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder="Nama" />
            </View>

            <View className="flex-row relative z-10 rounded-md p-3 w-full items-center mb-5" style={style.inputWrapper}>
              <Fontisto name="transgender" size={24} style={style.inputIcon} />
              <SelectList
                data={genders}
                setSelected={(val) => setGender(val)}
                save="key"
                search={false}
                boxStyles={style.selectBox}
                dropdownStyles={style.selectDropdown}
                dropdownItemStyles={style.selectItem}
                defaultOption={genders.find((item) => item.key === 'anonym')}
                onSelect={() => console.log(gender)}
              />
            </View>

            <View className="flex-row rounded-md p-3 w-full items-center" style={style.inputWrapper}>
              <MaterialCommunityIcons name="playlist-edit" size={24} style={style.inputIcon} />
              <TextInput className="w-10/12 pl-1 placeholder:text-s placeholder:text-black" placeholder="Bio" />
            </View>

            <Btn text="Simpan" pindah={press.save} />

          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#F1F1F1',
  },
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
