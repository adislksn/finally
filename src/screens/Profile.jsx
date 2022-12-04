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
<<<<<<< HEAD
    <SafeAreaView className="bg-white h-screen">
      <Header title="Profile" backScreen={press.toHome} />
      <View className="items-center h-full">
        <View className="my-6 ">
          <View className="rounded-full border-8 border-orange-400">
            <Image className="w-48 h-48 rounded-full " source={require('../assets/image2.png')} />
          </View>
          <TouchableOpacity className="bg-orange-500 absolute bottom-0 right-0 p-5 rounded-full" onPress={() => { press.editPicture(); }}>
            <FontAwesome name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="mx-7">
          <View className="flex-row mt-7 justify-start items-center bg-gray-200 p-2.5 rounded-xl">
            <View className="p-2 rounded-full ">
              {/* <Feather name="send" size={24} color="#C5C5C7" /> */}
              <FontAwesome name="user" size={24} color="#C5C5C7" />
            </View>
            <TextInput className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder={fullName} />
          </View>
          <View className="flex-row mt-7 z-50 justify-start items-center bg-gray-200 p-2.5 rounded-xl">
            <View className="p-2 rounded-full ">
              {/* <Feather name="send" size={24} color="#C5C5C7" /> */}
              {/* <FontAwesome name="user" size={24} color="#C5C5C7" /> */}
              <Fontisto name="transgender" size={24} color="#C5C5C7" />
            </View>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={gender}
              save="value"
              search={false}
              boxStyles={{
                borderColor: 'none',
                borderWidth: 0,
                width: 280,
              }}
              dropdownStyles={{
                position: 'absolute',
                borderColor: '#d1d5db',
                backgroundColor: '#e5e7eb',
                zIndex: 99,
                width: 280,
                top: 45,
                color: '#6b7280',
                padding: 0,
              }}
              dropdownItemStyles={{
                borderRadius: 10,
                padding: 10,
                margin: 5,
                backgroundColor: '#d1d5db',
              }}
               // override default styles
              defaultOption={{ key: '1', value: 'tidak ingin menyebutkan' }} // default selected option
            />
          </View>
          <View className="flex-row mt-7 justify-start items-center bg-gray-200 p-2.5 rounded-xl">
            <View className="p-2 rounded-full ">
              {/* <Feather name="send" size={24} color="#C5C5C7" /> */}
              <MaterialCommunityIcons name="playlist-edit" size={24} color="#C5C5C7" />
              {/* <FontAwesome name="user" size={24} color="#C5C5C7" /> */}
            </View>
            <TextInput className="w-10/12 pl-4 placeholder:text-s placeholder:text-black" placeholder={status} />
          </View>
        </View>
        <View className="bottom-24 absolute w-full py-6 px-7">
          <Btn text="Simpan" pindah={press.save} />
        </View>
=======
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="bg-white h-screen">
>>>>>>> ac7fdc2d0ed0b162c3fb16f38d1eafa0ebec31a1

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
