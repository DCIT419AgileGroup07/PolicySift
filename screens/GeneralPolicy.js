import { View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GeneralPolicy() {
  return (
    <SafeAreaView className='my-auto'>
    <View className='flex-row justify-center mb-16'>
      <Text className='text-3xl text-[#115E67] font-bold' >GENERAL INSURANCE</Text>
    </View>

      <TouchableOpacity>
            <View className='mb-4' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/starlife.png")}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Allianz.png")}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
          <View className='flex-row justify-center'>
            <Image source={require("../assets/Images/Hollard.png")}/>
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Glico.png")}/>
            </View>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
        </TouchableOpacity>

        
  </SafeAreaView>
  )
}