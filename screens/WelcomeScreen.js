import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/core';

export default function WelcomeScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-center mt-10 ">
        <Text className="text-[#115E67] font-bold text-4xl text-center mt-15 mb-24">Let's Get Started!</Text>
            <View className="flex-row justify-center mb-5 ">
            <Image source={require("../assets/Images/amico.png")}
                    style={{width: 250, height: 250}} />
            </View>
                <View className="space-y-4 mt-20">
                    <TouchableOpacity className="py-3 bg-[#115E67] mx-7 rounded-xl" 
                                        onPress={() => navigation.navigate("SignUp")}>
                        <Text className="text-2xl font-bold text-center text-white">Sign Up</Text>
                    </TouchableOpacity>
                </View>
                    <View className="flex-row justify-center mt-5">
                        <Text className="text-xl">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                            <Text className="font-semibold text-xl text-[#115E67]"> Log In</Text>
                        </TouchableOpacity>
                    </View>
        </View>
    </SafeAreaView>
  )
}

// onPress={()=> navigation.navigate('Login')}

// mongodb+srv://kwabenaadutekyi505:<password>@cluster0.dvjsoui.mongodb.net/?retryWrites=true&w=majority