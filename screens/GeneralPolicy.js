import { View, Text,SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';

export default function GeneralPolicy() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <ScrollView>
    <View className='flex-row justify-left my-8'><TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity>
    </View>

    <View className='items-center my-5'>
    <Text className='text-3xl mt-2 text-[#115E67] font-bold' >GENERAL INSURANCE</Text>
    </View>

      <View>
      <TouchableOpacity onPress={() => navigation.navigate("StarLifeGeneralMain")}>
            <View className='mb-4' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/starlife.png")}/>
            </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AllianzGeneralMain")}>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Allianz.png")}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HollardGeneralMain")}>
          <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
          <View className='flex-row justify-center'>
            <Image source={require("../assets/Images/Hollard.png")}/>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("GlicoGeneralMain")}>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Glico.png")}/>
            </View>
            <View className='my-4 ' style={{height: 1, backgroundColor: 'black'}}></View>
        </TouchableOpacity>
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}