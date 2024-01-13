import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarAccidentPolicy() {
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
                Star Personal and Group Accident Policy
        </Text>
    </View>

    <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-7 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
        The Policy is designed to foster the welfare of individuals as well as 
        to reduce the financial strain that an individual could undergo in the event of 
        an accident. Personal Accident insurance is a 24hr worldwide policy to provide compensation to 
        the insured or his legal representative for:
        </Text>

        
        <Text className="font-medium text-white mt-2 mx-3 ">
          · Death
        </Text>

        <Text className="font-medium text-white mx-3 ">
          · Permanent total disablement
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · The third section covers the insured’s liability to the public.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Temporary total disablement
        </Text>
        <Text className="font-medium text-white mx-3  ">
          · Medical expenses
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          These injuries should be solely caused by violence, accident, or 
          external and visible events.
        </Text>
        <Text className="font-medium text-white mx-3 mb-20 ">
          You may take either PA policy for yourself or a group policy for your 
          family, organization, etc. protecting you and them.
        </Text>

      </View>
   </SafeAreaView>
  )
}