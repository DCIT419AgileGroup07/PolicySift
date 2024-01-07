import { View, Text, ScrollView, Image , ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AboutUs() {
  return (
    <SafeAreaView>
    <ImageBackground
    source={require("../assets/Images/greenunsplash.jpg")}
    style={{
      width: '100%', // applied to Image
      height: '100%' 
    }}>
    <View>
        <View>
            <TouchableOpacity></TouchableOpacity>
        </View>
        <View className='items-center mt-3'>
        <Text className='text-white text-2xl font-semibold items-center'>About Us</Text>
        </View>
    </View>
    <View className='items-center bg-[#115E67] my-16 mx-'>
        <ScrollView>
        <View className='items-center'><Image source={require("../assets/Images/logo.png")}/></View>
             <View className='mx-4'>
              <Text className='text-white text-lg'>
            Travelling is always an exciting activity be it for leisure or business. 
            The fun and excitement come with the responsibility to make your journey safe. 
            Your desire to have a fun-filled travel without worries is what we aim to achieve. 
            Star's Travel Insurance provides cover for travelers when they leave the shores of Ghana 
            against a broad range of mishaps and host of unforeseen events that may occur in the course of their trip.
            Benefits The policy provides cover for Medical, Emergency Service & Repatriation up to €30,000.
            Additionally, we cover:{"\n"}
            · Hospitalization{"\n"}
            · Accidental death and permanent disablement{"\n"}
            · Extended accommodation and travel expense{"\n"}
            · Complimentary / Free Insurance Extension{"\n"}
            · Loss of Personal Baggage{"\n"}
            · Compensation for delay in the arrival of luggage{"\n"}
            · Compensation (expense for replacement) for loss of essential documents{"\n"}
            · Compensation for in-flight loss of checked-in luggage hijack Benefit{"\n"}
            </Text>
            </View>
        </ScrollView>    
    </View>
    </ImageBackground>
</SafeAreaView>
  )
}
