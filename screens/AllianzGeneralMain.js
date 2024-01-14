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
        <View className='flex-row justify-left mt-8 mb-1'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GeneralPolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Allianz.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-1 mb-7 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>ALLIANZ GENERAL INSURANCE</Text>
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarMotor")}  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/Accident_1.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Motor Insurance</Text>
              
            </TouchableOpacity>

            <TouchableOpacity  className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center" style={{width: 155, height: 130}}>
            <Image source={require("../assets/Images/img1.png")} className='mt-7' style={{width: 70, height: 50}} />            
             
              <Text className='text-teal-800 mt-1 text-xs  text-center font-medium'>Homeowners Insuarance  </Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row">
           <TouchableOpacity style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'>Star Personal and{"\n"} Group Accident Policy{"\n"} Policy </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")}  className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'>Star Personal{"\n"} Guide Policy </Text>
            </TouchableOpacity> 
        </View>

        <View className=" items-center mb-5 ">
           <TouchableOpacity   style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")}  className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'>Star International {"\n"}Travels Insurance Policy </Text>
            </TouchableOpacity>

            
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}