import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoGeneralMain() {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='flex-row justify-left mt-8 '>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GeneralPolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Glico.png")} />
        </View>

        <View className="py-4  bg-[#115E67] mb-7 mt-6 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>GLICO GENERAL INSURANCE</Text>
        </View>

        <View className="flex-row">
           

           <TouchableOpacity onPress={() => navigation.navigate("GlicoMotor")}  style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/Accident_1.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Motor Insurance</Text>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("GlicoMarine")}  className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center" style={{width: 155, height: 130}}>
            <Image source={require("../assets/Images/shiponfire.png")} className='mt-6' style={{width: 70, height: 50}} />            
             
              <Text className='text-teal-800 mt-3 text-xs  text-center font-medium'>Marine Insuarance  </Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row mb-5 ">
           <TouchableOpacity onPress={() => navigation.navigate("GlicoSpecialty")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/workman.png")} className='mt-6' style={{width: 130, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'> Specialty Risk {"\n"}
                   Insurance  
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("GlicoFire")} style={{width: 155, height: 130}} className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/Firedhouse.png")}  className='mt-5' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-center text-xs font-medium'>Fire Insurance </Text>
            </TouchableOpacity> 
        </View>

        
      </ScrollView>
    </SafeAreaView>
  )
}