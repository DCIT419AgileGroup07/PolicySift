import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HollardTravelExecutive() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("HollardTravel")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Hollard.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-3 text-teal-900 text-base'>
            Executive Motor Insurance       
         </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl ">
        
            <Text className='font-bold text-white mt-5 text-center'>
                What Executive  Motor Insurance covers            
            </Text>

            <Text className='font-bold text-white mt-5 mx-3'>
                Key Benefits            
            </Text>


            <Text className='font-medium text-white mt-1 mx-3 mb-2 '>
                
                -Accidental collisions, overturning or more {"\n"} {"\n"}
                -Damage from fire, external explosions, self-ignition or lightning {"\n"} {"\n"}
                -Theft or malicious acts {"\n"} {"\n"}
                -Damage as a result of floods, storms, earthquakes, riots, strikes and civil commotion, or while it’s being carried by road, rail, inland waterway, lift or elevator {"\n"} {"\n"}
                -Damage to third-party property with a guaranteed limit of GHC4,000.00, or death and injury for which the insured is legally liable and death to third parties for which you may be legally liable  {"\n"} 
            </Text>

           
    </View>
   </SafeAreaView>
  )
}