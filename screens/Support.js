import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function Support() {
  return (
    <View>
        <View className='items-center mt-12'><Text className='font-bold text-2xl text-[#034047]'>CONTACT US</Text></View>
      <View className='items-center mt-5'>
        <Image source={require("../assets/Images/contactus.png")}/>
    </View>

    <View className='mx-5'>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Fullname</Text></View>
    <View className="p-3 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput className='text-xl'/>
    </View>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Mobile phone</Text></View>
    <View className="p-3 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput keyboardType='numeric'
            className='text-xl'/>
    </View>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Subject</Text></View>
    <View className="p-3 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput className='text-xl'/>
    </View>

    </View>
    </View>
  )
}