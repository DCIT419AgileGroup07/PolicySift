import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HollardAdepaFamily() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity onPress={() => navigation.navigate("HollardLifeMain")}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/Hollard.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900">
          THE HOLLARD INSURANCE(GHANA)
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>Hollard Life Insurance</Text>
        </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">

        <Text className="font-medium text-white mx-3 ">
          · Funeral insurance quote is drawn up 
           especially for you and your needs
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · No underwriting necessary.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Covers start immediately for accidental 
            death.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · 20% guaranteed premium return for 
            every 60 months.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · No premium payment upon retirement 
            and also upon death of the policyholder
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Free insurance cover up to five children 
            of the policyholder
        </Text>
        
      </View>
    </SafeAreaView>
  );
}