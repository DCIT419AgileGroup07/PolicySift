import React, { useEffect } from 'react';
import { BackHandler, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/core';



export default function WhatPolicy() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='my-auto'>
      <View className="flex-row justify-center">
        <Image source={require("../assets/Images/logo.png")}/>
      </View>
      <View className='flex-row justify-center mt-10'>
        <Text className='text-[#7F7F7F] font-semibold text-lg'>Our Insurance Services</Text>
      </View>
      <View className='items-center mt-5'>
        <Image source={require("../assets/Images/img4.png")} style={{width: 300, height: 170}}/>
      </View>
      <View className='items-center mt-5'>
        <Text className='text-[#43A9AF]'>Let’s find you the best insurance policies</Text>
      </View>
      <View className='mt-5'>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#cef3f0] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("GeneralPolicy")}
          >
            <Text className='font-semibold'>General Insurance</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#cef3f0] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("LifePolicy")}
          >
            <Text className='font-semibold'>Life Insurance</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#cef3f0] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("HealthPolicy")}>
            <Text className='font-semibold'>Health Insurance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
