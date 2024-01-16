import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AllianzHomePolicy() {
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
        <Text className='font-extrabold mt-2 text-teal-900 text-base'>
            Travel Insurance        
        </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl ">         
              
        <TouchableOpacity onPress={() => navigation.navigate("HollardTravelComprehensive")} style={{width: 250, height: 150}} className="border border-teal-50  mt-10  ml-10 mb-4 p-1 rounded-l items-center">
            <Text className='text-teal-50 mt-1 text-center  font-bold'> Comprehensive car Insurance </Text>
            <Text className='text-teal-50 mt-1 text-center text-xs font-medium'> Whatever your budget or needs, Hollard is the expert in car insurance in Ghana, offering you three types of motor insurance to choose from. Pick the cover you want, at a price you can afford.</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HollardTravelExecutive")} style={{width: 250, height: 150}} className="border border-teal-50  mt-10  ml-10 mb-20 p-1 rounded-l items-center">
            <Text className='text-teal-50 mt-1 text-center  font-bold'> Executive Motor Insurance</Text>
            <Text className='text-teal-50 mt-1 text-center text-xs font-medium'> If you’re a busy executive who can’t do without the day-to-day use of your private vehicle, you’ll know how important it is to have comprehensive car insurance should something happen to it.</Text>
        </TouchableOpacity>



    </View>
   </SafeAreaView>
  )
}