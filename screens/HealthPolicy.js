import { View, Text,SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

export default function HealthPolicy() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
      <View className='my-auto'>
      <View className='flex-row justify-left my-8'><TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity>
        <Text className='text-3xl mt-2 mx-5 text-[#115E67] font-bold' >HEALTH INSURANCE</Text>
      </View>

    
      <View className='mt-16'>
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
    </View>
    </View>
  </ScrollView>
    </SafeAreaView>
  )
}