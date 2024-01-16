import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoMarine() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8 mb-4'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GlicoGeneralMain")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Glico.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-5 text-teal-900 text-base'>
           Marine Insurance 
        </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-5  elevation rounded-xl items-center">
        
            <Text className='font-bold text-white mt-5'>
                MARINE INSURANCE 
            </Text>

            <Text className='font-medium text-white mt-1 mx-3  text-center'>
                Our Marine Insurance covers the loss or damage to cargo and ships. They are 
                mainly classified into two, which is marine cargo and marine hull. This policy may also be taken to cover air cargo and other types of freight.
            </Text>

            <Text className='font-bold text-white mt-3'>
                MARINE CARGO 
            </Text>

            <Text className='font-medium text-white mt-1 mx-3 mb-5 text-center'>
                Our Marine Cargo Insurance provides insurance for goods you may ship from one place to another, anywhere in the world. The policy is usually effected 
                on a “per voyage” basis i.e., from the time the goods leave the premises of the seller until the time they finally arrive at the buyer’s premises. 
                It can either be effected by the buyer or the seller depending on the contract of sales be it FOB, C&F or CIF. {"\n"}
                We can arrange an Individual Cover for each and every shipment or an Open Cover which is a continuous policy providing automatic cover for all shipment described in the policy. {"\n"}
                Our Marine Cargo Policy covers varied risks such as shipment by sea, by air, inland transits and adopts the Institute Cargo Clauses A, B, C amongst others in providing you with robust 
                and tailored cargo insurance in respect of all goods imported/exported in or out of the country.
            </Text>
    </View>
   </SafeAreaView>
  )
}