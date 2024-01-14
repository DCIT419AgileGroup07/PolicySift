import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarLifeGeneralMain() {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
        <View className='flex-row justify-left mt-8 mb-1'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GeneralPolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/starlife.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>STAR LIFE GENERAL INSURANCE</Text>
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarMotor")} style={{width: 155, height: 130}} className=" bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/motor.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Star Motor {"\n"} Insurance Policy </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("StarComprehensive")} style={{width: 155, height: 130}} className=" bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
            <Image source={require("../assets/Images/Homeowner.png")} className='mt-7' style={{width: 70, height: 50}} />            
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Star Comprehensive {"\n"} Homeowners Policy </Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarAccidentPolicy")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/Accident_1.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star Personal and {"\n"} Group Accident Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("StarPersonalGuide")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
              <Image source={require("../assets/Images/Guide_policy.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star Personal {"\n"} Guide Policy </Text>
            </TouchableOpacity> 
        </View>

        <View className="items-center">
           <TouchableOpacity onPress={() => navigation.navigate("StarInternationalTravels")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/plane.png")} className='mt-7' style={{width: 130, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star International {"\n"} Travels Insurance {"\n"} Policy </Text>
            </TouchableOpacity>

            
        </View>

    </SafeAreaView>
  )
}