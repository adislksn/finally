import {
  StyleSheet, Text, View, Button,
} from 'react-native';

function Home(props) {
  const { navigation } = props;

  // Handle press events.
  const press = {
    logout() {
      navigation.navigate('Login');
    },

    toProfile() {
      navigation.navigate('Profile');
    },

    toMaps() {
      navigation.navigate('Maps');
    },
  };

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Profile" onPress={() => press.toProfile()} />
      <Button title="Cari Teman" onPress={() => press.toMaps()} />
      <Button title="Keluar" onPress={() => press.logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
