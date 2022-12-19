/* eslint-disable import/no-unresolved */
import { useCallback, useState } from 'react';
import { INITIAL_SCREEN } from '@env';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Maps, Home, Login, Welcome, Profile, Register, ChatRoom,
} from './screens';
import ModalApprovalRequest from './screens/_components/_modals/ApprovalRequest';
import { events } from './helpers';
import { setFriend } from './redux/features/chat';
import { setToken, setData, resetState } from './redux/features/user';

function Routes() {
  const [modalApproval, setModalApproval] = useState(false);
  const dispatch = useDispatch();

  const initialScreenName = INITIAL_SCREEN || 'Welcome';
  const Stack = createNativeStackNavigator();
  // eslint-disable-next-line no-console
  if (INITIAL_SCREEN) console.log('> Show Screen:', INITIAL_SCREEN);

  const onLayoutView = useCallback(async () => {
    // Load storage data.
    const token = await AsyncStorage.getItem('token');
    dispatch(setToken(token));

    // Get my session info.
    const url = '/api/me';
    await axios.get(url).then(({ data }) => {
      dispatch(setData(data.data));
      events.emit('user-updated', data.data);
    }).catch(() => {
      dispatch(resetState());
    });

    // Events.
    events.emit('app-ready');
    events.on('socket:chat-request', (friend) => {
      dispatch(setFriend(friend));
      setModalApproval(true);
    });
  }, []);

  return (
    <View onLayout={onLayoutView} style={{ flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialScreenName}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
        </Stack.Navigator>
      </NavigationContainer>

      <ModalApprovalRequest showed={modalApproval} setter={setModalApproval} />

    </View>
  );
}

export default Routes;
