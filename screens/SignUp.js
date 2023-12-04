import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className = 'flex-1 bg-white'>
          <View className = "flex-3 justify-center pt-16 mt-8">
            <Text className = "text-[#115E67] font-bold text-4xl text-center mb-5">Sign Up</Text>
            <Text className ="text-center text-gray-500 mb-10">Please fill the details and create an account now</Text>
        </View>
          <View className="flex items-center mx-5 space-y-4">
          <View className="bg-black/5 p-5 rounded-full mb-5 w-full">
            <TextInput
                        placeholder="Enter fullname"
                        placeholderTextColor={'gray'}/>
            </View>
            <View className="bg-black/5 p-5 rounded-full mb-5 w-full">
            <TextInput  
                        placeholder="Email address"
                        placeholderTextColor={'gray'}/>
            </View>
            <View className="bg-black/5 p-5 rounded-full mb-5 w-full">
            <TextInput
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        secureTextEntry/>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("WhatPolicy")}
                            className="bg-[#115E67] py-4 px-[120] rounded-full mb-3">
                        <Text className="text-2xl font-bold text-white text-center"
                                        >Sign Up</Text>
                    </TouchableOpacity>
            </View>
            <View  className="flex-row justify-center mt-5">
            <Text className="text-xl">Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                <Text className="font-bold text-xl text-[#115E67]">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
  )
}