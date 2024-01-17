import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AllianzHomePolicy() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("AllianzGeneralMain")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Allianz.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-1 text-teal-900'>
        Allianz Insurance Company Ghana Limited
        </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl ">
        
              <Text className='font-bold text-white mt-5  text-center'>
                Home Insurance 
              </Text>

              <Text className='font-medium text-white mx-3 mt-5 '>
                 What We Cover 
              </Text>

              <Text className='font-medium text-white mx-3 mt-5 mb-'>
                - Emergency medical expenses {"\n"} 

                - Hospitalization {"\n"} 

                - Repatriation of remains {"\n"} 

                - Loss of travel documents {"\n"} 

                - Flight delay {"\n"} 

                - Loss of luggage {"\n"} 
              </Text>

              <View className="flex-row mb-5 items-center justify-center">
  
                <View style={{width: 145, height: 145}} className="border border-teal-50  mt-1 p-1 rounded-l">
                   
                  <Text className='text-teal-50 mt-1 text-center text-xs font-bold'>Public Liability  </Text>
                  <Text className='text-teal-50 mt-1 text-center text-xs font-medium'>Covers your legal liability as the house owner for injuries or death of third parties at your place of residence arising from your negligence. </Text>
                </View> 

                <View style={{width: 145, height: 145}} className="border border-teal-50 mx-2 mt-1 p-1 rounded-l">
                  
                  <Text className='text-teal-50 mt-1 text-center text-xs font-bold'>Personal Accidents </Text>
                  <Text className='text-teal-50 mt-1 text-center text-xs font-medium'>Compensate you and your household whenever you sustain accidental bodily injury. </Text>
                </View>
              </View>

              <View className='items-center justify-center mb-2'>
              <View style={{width: 300, height: 110}} className="border border-teal-50  mt-1 mb-3 p-1 rounded-l items-center ">
                <Text className='text-teal-50 mt-1 text-center text-xs font-bold'> Rent</Text>
                <Text className='text-teal-50 mt-1 text-center text-xs font-medium'> We pay up to 12 month loss of rent following damage to your property which makes the place not suitable for rental.</Text>


              </View>
              </View>
    </View>
   </SafeAreaView>
  )
}