import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';


export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <SafeAreaView>
    <ImageBackground
    source={require("../assets/Images/greenunsplash.jpg")}
    style={{
      width: '100%', // applied to Image
      height: '100%' 
    }}>
      <View className='bg-white rounded-t-3xl mt-40' style={{
      width: '100%', 
      height: '100%' 
    }}>
      {/* <View className='mb-5'> 
          <Image className='mb-5'source={require("../assets/Images/starlife.png")}/>
      </View> */}
      <View className='items-center mb-5 '>
        <Text className='text-xl text-[#115E67] font-bold'>Kwabena AT</Text>
        <Text className='text-lg'>055 689 9376</Text>
        <Text className='text-base'>kadu-tekyi001@st.ug.edu.gh</Text>
      </View>
      <View style={{height:'15%'}}>
        <Text className='mx-5 text-xl mb-3 text-[#115E67] font-bold'>Dashboard</Text>
        <View className='bg-[#115E67] mx-5 rounded-3xl flex-row' style={{height:'65%'}}> 
        <View className='mx-8 my-auto'><MaterialCommunityIcons  name='notebook'size={50} color={'white'}/></View>
        <View className='bg-white flex-col rounded-full my-auto' style={{height:'60%', width:'3%'}}></View>
        <View className='flex-col mx-4 text-white my-auto'>
          <Text className='text-white text-base'> Policy :</Text>
          <Text className='text-white text-base'>Type    :</Text>
        </View>
        </View>
      </View>
      
      <View>
        <Text className='mx-5 my-3 text-xl text-[#115E67] font-bold'>Settings</Text>

        <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl'
        onPress={() => navigation.navigate("SignUp")}>
            <Text className ='text-[#115E67] text-lg font-semibold mx-4'>Password</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl mt-3'
        onPress={() => navigation.navigate("SignUp")}>
          <Text className ='text-[#115E67] text-lg font-semibold mx-4'>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl mt-3'
        onPress={() => navigation.navigate("SignUp")}>
          <Text className ='text-[#115E67] text-lg font-semibold mx-4'>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl mt-3'
        onPress={() => navigation.navigate("WelcomeScreen")}>
          <Text className ='text-[#115E67] text-lg font-semibold mx-4'>Sign out</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl mt-3'
        onPress={() => navigation.navigate("SignUp")}>
          <Text className ='text-[#115E67] text-lg font-semibold mx-4'>Sign out</Text>
        </TouchableOpacity>

        <TouchableOpacity className='bg-[#dce2e2] mx-5 py-3 rounded-2xl mt-3'
        onPress={() => navigation.navigate("SignUp")}>
          <Text className ='text-[#115E67] text-lg font-semibold mx-4'>Sign out</Text>
        </TouchableOpacity> */}
        <View className='bg-white'>
        <TouchableOpacity className='bg-white mx-5 py-3 rounded-2xl mt-3'>
        </TouchableOpacity>
        </View>

            </View>
      </View>
</ImageBackground>
</SafeAreaView>
</ScrollView>
  )
}
