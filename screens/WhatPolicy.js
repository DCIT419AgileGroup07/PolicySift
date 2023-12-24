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
        <Text className='text-[#115E67] font-semibold text-lg'>OUR INSURANCE SERVICES</Text>
      </View>
      <View className='items-center mt-5'>
        <Image source={require("../assets/Images/img4.png")} style={{width: 300, height: 170}}/>
      </View>
      <View className='items-center mt-5'>
        <Text className='text-[#000000]'>Let’s find you the best insurance policies</Text>
      </View>
      <View className='mt-5'>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#4ECFD4] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("GeneralPolicy")}
          >
            <Text className='font-bold text-white'>GENERAL INSURANCE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#4ECFD4] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("LifePolicy")}
          >
            <Text className='font-semibold text-white'>LIFE INSURANCE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="py-5 bg-[#4ECFD4] mb-5 mx-7 rounded-xl items-center"
            onPress={() => navigation.navigate("HealthPolicy")}>
            <Text className='font-semibold text-white'>HEALTH INSURANCE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
