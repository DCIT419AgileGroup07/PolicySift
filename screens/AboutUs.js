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
    <View className='items-center bg-white my-16 mx-4 rounded-3xl'>
        <ScrollView>
        <View className='items-center'><Image source={require("../assets/Images/logo.png")}/></View>
        <View className='items-center mb-2'><Text className='text-[#115E67] text-xl text-center font-bold'>Introducing Policy Sift: Your One-Stop Insurance App</Text></View>
             <View className='mx-4'>
              <Text className='text-[#115E67] text-lg text-center'>
              Policy Sift is a revolutionary mobile insurance application that is changing the way 
              people manage their insurance policies. With Policy Sift, you can easily 
              compare quotes from top insurance providers, track your existing policies, and 
              file claims – all from the convenience of your smartphone.</Text>

              <View className='my-2'><Text className='text-[#115E67] text-center text-xl font-bold'>
                What Makes Policy Sift Different?</Text></View>

                
              <View><Text className='text-[#115E67] text-lg text-center font-bold'>Simplicity</Text>
              <Text className='text-[#115E67] text-lg text-center'>Policy Sift is designed to be user-friendly 
              and intuitive, even for those who are not familiar with insurance.</Text>
              </View>

              <View><Text className='text-[#115E67] text-lg text-center font-bold'>Choice</Text>
              <Text className='text-[#115E67] text-lg text-center'> Compare quotes from multiple insurance providers 
              to find the best coverage at the best price.
              </Text>
              </View>

              <View><Text className='text-[#115E67] text-lg text-center font-bold'>Convenience</Text>
              <Text className='text-[#115E67] text-lg text-center'> Manage all of your insurance 
              policies in one place, anytime, anywhere..</Text>
              </View>

              <View><Text className='text-[#115E67] text-lg text-center font-bold'>Control</Text>
              <Text className='text-[#115E67] text-lg text-center'> Take control of your insurance 
              claims with our easy-to-use claims filing process</Text>
              </View>

              
        
            
            </View>
        </ScrollView>    
    </View>
    </ImageBackground>
</SafeAreaView>
  )
}
