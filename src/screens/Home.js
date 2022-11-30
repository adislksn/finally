import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home =()=> {
    return (
    <View className="bg-slate-100 flex-1 justify-center items-center">
        <Image className="w-28 h-28" source={require('../assets/finally.png')}/>
        <Text className="font-bold text-3xl pt-4">Finally</Text>
        <StatusBar style="auto" />
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