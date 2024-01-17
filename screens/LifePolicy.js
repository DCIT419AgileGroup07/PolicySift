import { View, Text,SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

export default function LifePolicy() {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView>
      <ScrollView>
      <View className='flex-row justify-left my-8'><TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity>
        <Text className='text-3xl mt-2 mx-12 text-[#115E67] font-bold' >LIFE INSURANCE</Text>
      </View>



      <View className='mt-5'>
      <TouchableOpacity onPress={() => navigation.navigate("StarLifeLifeMain")}>
            <View className='mb-7' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/starlife.png")}/>
            </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AllianzLifeMain")}>
            <View className='my-7' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Allianz.png")}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HollardLifeMain")}>
          <View className='my-7' style={{height: 1, backgroundColor: 'black'}}></View>
          <View className='flex-row justify-center'>
            <Image source={require("../assets/Images/Hollard.png")}/>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("GlicoLifeMain")}>
            <View className='my-7' style={{height: 1, backgroundColor: 'black'}}></View>
            <View className='flex-row justify-center'>
              <Image source={require("../assets/Images/Glico.png")}/>
            </View>
            <View className='my-7' style={{height: 1, backgroundColor: 'black'}}></View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}