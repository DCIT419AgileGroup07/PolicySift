import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarLifeLifeMain() {
    const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <View className='flex-row justify-left mt-8 mb-1'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("LifePolicy")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        </View>

        
        <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/starlife.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-12 mb-3 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>SIC LIFE INSURANCE </Text>
        </View>

        <View className="flex-row">
           <TouchableOpacity onPress={() => navigation.navigate("StarMotor")} style={{width: 250, height: 200}} className=" bg-teal-50 elevation mt-20  ml-12 rounded-l items-center">
              <Image source={require("../assets/Images/InsuranceHands.png")} className='mt-7' style={{width: 70, height: 50}} />
              <Text className='text-teal-800 mt-1 text-xs text-center font-medium'>Employee Security {"\n"} Plan (Group Life) </Text>
            </TouchableOpacity>
 
        </View>

        
        </ScrollView>
    </SafeAreaView>
  )
}