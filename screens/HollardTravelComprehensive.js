import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HollardTravelComprehensive() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("HollardTravel")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Hollard.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-3 text-teal-900 text-base'>
            Comprehensive Car Insurance       
         </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl items-center">
        
            <Text className='font-bold text-white mt-5'>
               What Comprehensive Motor Insurance covers        
            </Text>

            <Text className='font-medium text-white mt-5 mx-3 mb-20 '>
                -Accidental collision or overturning {"\n"}
                =Fire, external explosion, self-ignition or lightning {"\n"}
                -Theft, burglary, house-breaking and malicious acts {"\n"}
                -Flood, storm, earthquake, riot, strike and civil commotion {"\n"}
                -Property damage, injury and death to third parties for which you may be legally liable {"\n"}
            </Text>

           
    </View>
   </SafeAreaView>
  )
}