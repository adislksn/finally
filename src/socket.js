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

  // Get chat request.
  socket.on(`chat-request:${user._id}`, (data) => {
    const friend = { ...data.user };
    friend.message = data.message;
    events.emit('socket:chat-request', friend);
  });
});

export default socket;
