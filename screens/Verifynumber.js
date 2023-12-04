import { View, Text, Image, TouchableOpacity, Border, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/core';

export default function Verifynumber() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <View className="flex-1 flex justify-center mt-10 ">
        <Text className="text-[#115E67] font-bold text-3xl text-center mt-2 mb-15">Verifying number</Text>
        <View className="flex-row justify-center mt-10 mb-5 ">
          <Image source={require("../assets/Images/rafiki.png")} style={{width: 300, height: 250}}></Image>
        </View>
        
        <View className=" flex space-y-4 mt-20 relative rounded-2xl border border-stone-600 mt-7 mb-20 ml-10 mr-10  p-4" >
          <Text className="text-center " >  We have sent a verification code to 020******1 </Text>
            <View className="bg-black/5 p-2 rounded-full   ">
            <TextInput
                        placeholder="Enter code"
                        placeholderTextColor={'gray'}/>
            </View>

          <Text className="text-right mb-3">1:20 sec left</Text>
    
          <View>
            <TouchableOpacity className="py-4 mb-2 bg-[#4ECFD4] mx-20 rounded-full"
                              onPress={() => navigation.navigate("Verifynumber")} >
              <Text className="text-l font-bold text-center text-black">Verify</Text>

            </TouchableOpacity>
          </View>
          


        </View>

      </View>
    </SafeAreaView>
  )
}