import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

export default function Support() {
  return (
    <View>
        <View className='items-center mt-12'><Text className='font-bold text-2xl text-[#115E67]'>Contact Us</Text></View>
      <View className='items-center mt-5'>
        <Image source={require("../assets/Images/contactus.png")}/>
    </View>

    <View className="bg-black/5 p-5 border-2 border-[#115E67] rounded-full mb-5 w-full">
            <TextInput
                        placeholder="Enter fullname"
                        placeholderTextColor={'gray'}/>
    </View>

    <View className="bg-black/5 p-5 border-2 border-[#115E67] rounded-full mb-5 w-full">
            <TextInput
                        placeholder="Enter fullname"
                        placeholderTextColor={'gray'}/>
    </View>

    <View className="bg-black/5 p-5 border-2 border-[#115E67] rounded-full mb-5 w-full">
            <TextInput
                        placeholder="Enter fullname"
                        placeholderTextColor={'gray'}/>
    </View>

    </View>
  )
}