import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AllianzGeneralMain() {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='flex-row justify-left mt-8 '>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GeneralPolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Allianz.png")} />
        </View>

        <View className="p-4 bg-[#115E67] mb-7 mx-8 rounded-xl items-center">
             <Text className='font-bold text-white'>ALLIANZ GENERAL INSURANCE</Text>
        </View>

        <View className="flex-row mx-7">
           

           <TouchableOpacity onPress={() => navigation.navigate("AllianzMotor")}  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7 rounded-l items-center">
              <Image source={require("../assets/Images/motor.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Motor Insurance</Text>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("AllianzHomePolicy")} className="bg-teal-50 elevation mt-7 mx-4 rounded-l items-center" style={{width: 155, height: 130}}>
            <Image source={require("../assets/Images/Familyinsurance.png")} className='mt-6' style={{width: 70, height: 50}} />            
             
              <Text className='text-teal-800 mt-3 text-xs  text-center font-medium'>Home Insuarance</Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row mb-5 mx-7">
           <TouchableOpacity onPress={() => navigation.navigate("AllianzTravel")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7 rounded-l items-center">
              <Image source={require("../assets/Images/plane.png")} className='mt-6' style={{width: 135, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'> Travel Insurance </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7 mx-4 rounded-l items-center">
              <Image source={require("../assets/Images/funeralservice_1.png")}  className='mt-5' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'>Allianz Funeral {"\n"} Policy </Text>
            </TouchableOpacity> 
        </View>

        
      </ScrollView>
    </SafeAreaView>
  )
}