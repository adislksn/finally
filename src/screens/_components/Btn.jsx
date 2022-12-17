/* eslint-disable react/destructuring-assignment */
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Btn(props) {
  const title = props.text;
  const { disabled } = props;
  return (
    <TouchableOpacity
      className="w-full mx-10 mt-8 items-center self-center"
      disabled={disabled}
      activeOpacity={0.7}
      onPress={() => props.click()}
    >
      <LinearGradient
        colors={['#FCAF39', '#FCAF39', '#FB4911']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        className="py-3 w-full"
        style={{ borderRadius: 10 }}
      >
        <Text className="text-white text-center" style={style.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export default Btn;
