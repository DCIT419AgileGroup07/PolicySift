import { View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

export default function LifePolicy() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='my-auto'>
      <View className='flex-row justify-center mb-16'>
      <View className='mx-2'><TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
        <Text className='text-3xl mt-2 text-[#115E67] font-bold' >LIFE INSURANCE</Text>
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