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
           <TouchableOpacity onPress={() => navigation.navigate("StarMotor")} className="py-5 px-7 bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")} style={{width: 70, height: 50}} />
              <Text className='text-teal-800 text-xs font-medium'>Star Motor </Text>
              <Text className='text-teal-800 text-xs font-medium'>Insurance Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("StarComprehensive")} className="py-5 px-3 bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
            <Image source={require("../assets/Images/img1.png")} style={{width: 70, height: 50}} />            
              <Text className='text-teal-800 text-xs font-medium'>Star Comprehensive </Text>
              <Text className='text-teal-800 text-xs font-medium'>Homeowners Policy  </Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarAccidentPolicy")} className="py-3 px-2 bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")} style={{width: 70, height: 50}} />
              <Text className='text-teal-800 text-xs font-medium'>Star Personal and </Text>
              <Text className='text-teal-800 text-xs font-medium'>Group Accident Policy </Text>
              <Text className='text-teal-800 text-xs font-medium'>Policy </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("StarPersonalGuide")} className="py-6 px-8 bg-teal-50 elevation mt-7  mx-7 rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")} style={{width: 70, height: 50}} />
              <Text className='text-teal-800 text-xs font-medium'>Star Personal </Text>
              <Text className='text-teal-800 text-xs font-medium'>Guide Policy  </Text>
            </TouchableOpacity> 
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarInternationalTravels")}  className="py-4 px-5 bg-teal-50 elevation mt-7  ml-8  rounded-l items-center">
              <Image source={require("../assets/Images/img1.png")} style={{width: 70, height: 50}} />
              <Text className='text-teal-800 text-xs font-medium'>Star International </Text>
              <Text className='text-teal-800 text-xs font-medium'>Travels Insurance</Text>
              <Text className='text-teal-800 text-xs font-medium'>Policy</Text>
            </TouchableOpacity>

            
        </View>

    </SafeAreaView>
  )
}