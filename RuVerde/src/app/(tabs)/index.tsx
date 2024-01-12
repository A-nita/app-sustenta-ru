import { SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white gap-2'>
      <Text 
      className='text-4xl text-emerald-900 '
      >
        Cardápio
      </Text>

      <View className='flex items-start justify-center bg-white border-emerald-800 border-2 p-4 w-80'>
        <Text className='text-xl text-gray-900'>Almoço</Text>
      </View>

      <View className='flex items-start justify-center bg-white border-emerald-800 border-2 p-4 w-80'>
        <Text className='text-xl text-gray-900'>Jantar</Text>
      </View>

    </SafeAreaView>
  );
}

