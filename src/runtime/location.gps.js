import axios from 'axios';
import * as Location from 'expo-location';
import { events } from '../helpers';

const updatePositions = async () => {
  // Get location and update location.
  const location = await Location.getCurrentPositionAsync();

  // Save position in database.
  const url = '/api/me/locations';
  const body = location;
  axios.patch(url, body).catch(() => {});
};

events.on('app-ready', async () => {
  // Get location permissions.
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  // Running update position.
  events.on('user-updated', () => {
    updatePositions();
    setInterval(() => updatePositions(), 3000);
  });
});
