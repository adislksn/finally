import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import List from './List';

function ChatList(props) {
  const Move = props;
  return (
    <View className="px-7 pt-2 w-full" style={style.contaner}>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Masqomar.21" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Fanesa Hadi Pramana" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Adi Sulaksono " Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Masqomar.21" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Devi Kurnia" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="ADli Mustofa" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Masqomar.21" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>
      <TouchableOpacity className="w-full" onPress={() => { Move.screen(); }}>
        <List title="Masqomar.21" Status="lagi galau nich" Jarak="3.20" />
      </TouchableOpacity>

    </View>

  );
}
const style = StyleSheet.create({
  contaner: {
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
export default ChatList;
