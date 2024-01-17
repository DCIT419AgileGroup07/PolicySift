import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarLifeHealthMain() {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='flex-row justify-left mt-8 mb-1'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("HealthPolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/starlife.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>SIC HEALTH INSURANCE</Text>
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarWomenCare")} style={{width: 155, height: 130}} className=" bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
                <Image source={require("../assets/Images/motor.png")} className='mt-7' style={{width: 70, height: 50}} />
                <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Star Women Care
                     {"\n"} Insurance Policy 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("StarHealthComprehensive")} style={{width: 155, height: 130}} className=" bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
            <Image source={require("../assets/Images/Homeowner.png")} className='mt-7' style={{width: 70, height: 50}} />            
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Star Comprehensive {"\n"} Insurance  Policy</Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row">
           <TouchableOpacity  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/Accident_1.png")} className='mt-4' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star Health   {"\n"} Premier {"\n"} Insurances Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
              <Image source={require("../assets/Images/Guide_policy.png")} className='mt-4' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star Out patient  {"\n"} Care Insurance {"\n"}Policy </Text>
            </TouchableOpacity> 
        </View>

        <View className="items-center mb-5">
           <TouchableOpacity  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/plane.png")} className='mt-7' style={{width: 130, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center  font-medium'>Star Surplus  {"\n"}Insurance Policy </Text>
            </TouchableOpacity>

            
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}