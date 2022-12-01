/* eslint-disable react/destructuring-assignment */
/* eslint-disable quotes */

import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Btn(props) {
  return (
    <TouchableOpacity
      className="w-full mx-10 mt-8 items-center self-center "
      onPress={() => props.pindah()}
    >
      <LinearGradient
        colors={["#FCAF39", "#FCAF39", "#FB4911"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        className="py-3 rounded w-full "
      >
        <Text className="font-bold text-xl text-white text-center">
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default Btn;
