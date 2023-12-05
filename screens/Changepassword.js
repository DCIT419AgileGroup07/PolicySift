import { View, Text, Image, TouchableOpacity, Border, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/core';


export default function ForgetPass01() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <View className="flex-1 flex justify-center mt-10 ">
        <Text className="text-[#115E67] font-bold text-3xl text-center mt-2 mb-15">Change password</Text>
        <View className="flex-row justify-center mt-10 mb-5 ">
          <Image source={require("../assets/Images/rafiki3.png")} style={{width: 300, height: 250}}></Image>
        </View>
        
        <View className=" flex space-y-4 relative rounded-2xl border border-stone-600 mt-7 mb-20 ml-10 mr-10  p-5" >
          
            <View className="bg-black/5 p-2 rounded-full">
            <TextInput
                        placeholder="Old password"
                        placeholderTextColor={'gray'}/>
            </View>
            <View className="bg-black/5 p-2 rounded-full">
            <TextInput
                        placeholder="New password"
                        placeholderTextColor={'gray'}/>
            </View>
            <View className="bg-black/5 p-2 rounded-full">
            <TextInput
                        placeholder="Confirm password"
                        placeholderTextColor={'gray'}/>
            </View>
          
          <View>
            <TouchableOpacity className="py-4 mb-2 bg-[#4ECFD4] mx-20 rounded-full"
                              onPress={() => navigation.navigate("Verifypassword")} >
              <Text className="text-l font-bold text-center text-black">Save Now!</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>


    
  )
}