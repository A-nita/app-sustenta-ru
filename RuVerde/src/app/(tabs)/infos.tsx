import React, { useEffect, useState } from 'react';
import { SafeAreaView} from 'react-native';
import { Text, View } from '../../components/Themed';
import { Horario, Valores } from '../../components/infos';



export default function TabOneScreen() {

  const [price, setPrice] = useState< prices | null >(null);
  const day = new Date().getDay();

  useEffect(() => {
    fetch("http://62.72.11.172:3000/prices")
      .then((res) => res.json())
      .then((data) => setPrice(data.prices));

    }, []);
    
    
    console.log({price});
    return (
    <SafeAreaView className='flex-1 bg-white'>

      <View className='bg-white flex flex-row items-center  justify-between w-full px-6 mb-4 mt-12'>
        <Text className='text-3xl font-bold text-emerald-900'>
          Informações
        </Text>

      </View>
      
        <View className='flex-1 items-center justify-center bg-white'>
          <Horario
            title="Horários"
            titleOne='Almoço'
            contentOne="12h30 - 14h00"
            titleTwo='Jantar'
            contentTwo="2h30 - 14h00"
          />

          (price && {
            <Valores valores={price as prices} />
          })
 
        </View>
    </SafeAreaView>
  );
}

