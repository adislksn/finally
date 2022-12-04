import React, { useState } from 'react';
import {
  Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput,
} from 'react-native';
import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from '../component/Header';
import Btn from '../component/Btn';

function Profile(props) {
  const { navigation } = props;

  const [selected, setSelected] = useState('');

  const gender = [
    { key: '1', value: 'tidak ingin menyebutkan' },
    { key: '2', value: 'Laki Laki' },
    { key: '3', value: 'Perempuan' },
  ];

  const fullName = 'Adi Sulaksono';
  const status = 'aku lagi galau nich';

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

      </View>
    </SafeAreaView>
  );
}

export default Profile;
