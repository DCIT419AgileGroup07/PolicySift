import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarInternationalTravels() {
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
            Star International Travels Insurance Policy
        </Text>
    </View>

    <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
           Travelling is always an exciting activity be it for leisure or business. The fun and 
           excitement come with the responsibility to make your journey safe. Your desire to have a fun-filled travel 
           without worries is what we aim to achieve. Star's Travel Insurance provides cover for travelers
           when they leave the shores of Ghana against a broad range of mishaps and host of unforeseen events that may occur in the course of their trip.
        </Text>

        <Text className="font-bold text-white mx-3 ">Benefits</Text>
        <Text className="font-medium text-white mx-3 ">
            The policy provides cover for Medical, Emergency Service & Repatriation
            up to €30,000
        </Text>

        <Text className="font-medium text-white mx-3 ">
        Additionally, we cover:
        </Text>
        <Text className="font-medium text-white mx-3 ">
            · Hospitalization
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Accidental death and permanent disablement
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Extended accommodation and travel expense
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Complimentary / Free Insurance Extension
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Loss of Personal Baggage
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Compensation for delay in the arrival of luggage
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Compensation (expense for replacement) for loss of essential documents
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Compensation for in-flight loss of checked-in luggage
        </Text>
        <Text className="font-medium text-white mx-3 ">
        · Hijack Benefit
        </Text>
      </View>
   </SafeAreaView>
  )
}