import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View className='flex-1 items-center justify-center bg-black'>
        <View className='rounded-2xl items-center justify-center bg-slate-400  w-90 h-20'>
          <Text className='text-center text-xl'>
            Open up App.js to start working on your app!
          </Text>
        </View>
      </View>
    </>
  );
}
