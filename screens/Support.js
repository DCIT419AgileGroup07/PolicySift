import { View, Text, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Support() {
  const navigation = useNavigation();
  return (
  <SafeAreaView>


    <View className='flex-row mt-5'>
    <View className=''><TouchableOpacity className='left-0 ml-2' onPress={() => navigation.navigate("ProfileStack")}>
        <MaterialCommunityIcons name='chevron-left' size={45} color={'#034047'}/></TouchableOpacity></View>
      <Text className='text-[#034047] text-2xl font-semibold mt-2 mx-20 text-center'>Contact Us</Text>
    </View>

    <ScrollView>
    <View>
        <View className='items-center '></View>
      <View className='items-center mt-5'>
        <Image source={require("../assets/Images/contactus.png")}/>
    </View>

    <View className='mx-5'>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Fullname</Text></View>
    <View className="p-2 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput className='text-xl'/>
    </View>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Mobile phone</Text></View>
    <View className="p-2 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput keyboardType='numeric'
            className='text-xl'/>
    </View>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Subject</Text></View>
    <View className="p-2 border-2 border-[#115E67] rounded-full mb-2 w-full">
            <TextInput className='text-xl'/>
    </View>

    <View className='mx-5 mb-1 '><Text className='text-lg text-[#115E67] font-semibold'>Message</Text></View>
    <View className="py-16 border-2 border-[#115E67] rounded-xl mb-2 w-full">
            <TextInput className='text-xl'/>
    </View>

    <View className='my-5'>
    <TouchableOpacity 
              className="bg-[#115E67] py-4 px-[120] rounded-full mb-3">
        <Text className="text-2xl font-bold text-white text-center">Submit</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>  
  )
}