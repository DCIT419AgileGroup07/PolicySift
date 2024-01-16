import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HollardHome() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("HollardGeneralMain")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Hollard.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-3 text-teal-900 text-base'>
            Home Insurance         
        </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl items-center">
        
            <Text className='font-bold text-white mt-5'>
              What Home Insurance Covers            
            </Text>

            <Text className='font-medium text-white mt-7 mx-3 mb-40'>
                
                -Third-party liability cover for injury or damage to third-party property {"\n"}
                -Damage caused by the escape of water or oil from fixed water or heating installations or domestic appliances {"\n"}
                -Your outbuildings, swimming pools, fences, plumbing and other parts of your home. {"\n"}
                -Subsidence and heave of the site on which the building stands or landslip {"\n"}
            </Text>

            
    </View>
   </SafeAreaView>
  )
}