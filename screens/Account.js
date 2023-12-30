import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <ScrollView>
    <SafeAreaView>
    <ImageBackground
    source={require("../assets/Images/greenunsplash.jpg")}
    style={{
      width: '100%', // applied to Image
      height: '100%' 
    }}>
    <View>
      <Text>Account</Text>
    </View>
    </ImageBackground>
</SafeAreaView>
</ScrollView>
  )
}