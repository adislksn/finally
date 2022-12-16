import * as Location from 'expo-location';
import { events } from '../helpers';

const updatePositions = async () => {
  // Get location and update location.
  const location = await Location.getCurrentPositionAsync();
  // console.log(location);

  // Save position in database.
};

events.on('app-ready', async () => {
  // Get location permissions.
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  // Running update position.
  updatePositions();
  setInterval(() => updatePositions(), 5000);
});
