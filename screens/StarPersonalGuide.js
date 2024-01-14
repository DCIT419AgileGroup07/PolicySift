import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarPersonalGuide() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8 mb-7'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("StarLifeGeneralMain")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/starlife.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-5 text-teal-900'>
                Star Personal Policy Guide
        </Text>
    </View>

    <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-7 elevation rounded-xl  ">
        <Text className="font-medium text-white mx-3 ">
        Star Personal Guard is tailor-made no-frills personal accident policy for everyone.
         It covers Death, Permanent Disablement and Medical Expenses.
        </Text>
        
        <Text className="font-medium text-white  mx-3 ">
        The policy has three (3) main limited options for its target market. We have the 
        Silver, Gold and Platinum options.
        </Text>

        <Text className="font-medium text-white mx-3 mt-1">
            1. Silver Cover
        </Text>
        <Text className="font-medium text-white mx-3 ">
            The Silver Cover provides a Death and Permanent Disability limit of GHS 5,000 
            and medical Expense limit of GHC 1,000.
        </Text>

        <Text className="font-medium text-white mx-3 ">
        2. Gold Cover
        </Text>
        <Text className="font-medium text-white mx-3  ">
        The Gold Cover provides a Death and Permanent Disability limit of GHS 10,000 
        and medical Expense limit of GHC 2,000.
        </Text>

        <Text className="font-medium text-white mx-3  ">
        3. Platinum Cover
        </Text>
        <Text className="font-medium text-white mx-3 mb-11 ">
        The last and the widest cover is the Platinum cover. It provides a Death and Permanent Disability limit of 
        GHS 20,000 and medical Expense limit of GHC 5,000.
        </Text>

      </View>
   </SafeAreaView>
  )
}