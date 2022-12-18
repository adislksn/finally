/* eslint-disable import/no-unresolved */
import { BASE_URL } from '@env';
import { io } from 'socket.io-client';
import events from './helpers/events.helper';

const socket = io(BASE_URL, {
  path: '/ws',
  transports: ['websocket'],
  auth: {
    userId: null,
  },
  reconnection: true,
});

events.on('user-updated', (user) => {
  socket.disconnect();
  socket.io.opts.auth.userId = user._id;
  socket.connect();
});

export default socket;
