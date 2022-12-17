/* eslint-disable import/no-unresolved */
import { BASE_URL } from '@env';
import { io } from 'socket.io-client';

const socket = io(BASE_URL, {
  path: '/ws',
  transports: ['websocket'],
});

export default socket;
