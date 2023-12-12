import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View className='flex-1 items-center justify-center bg-emerald-900'>
        <View className='rounded-2xl items-center justify-center bg-emerald-400  w-90 h-30 p-5'>
          <Text className='text-center text-xl'>
            Open up App.js{'\n'}to start working{'\n'}on your app!
          </Text>
        </View>
      </View>
    </>
  );
}
