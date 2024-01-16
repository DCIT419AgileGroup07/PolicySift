import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoEndService() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity onPress={() => navigation.navigate("GlicoLifeMain")}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/Glico.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900">
          GLICO End of Service Benefit
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          The Policy is a savings benefit and provides life insurance cover as 
          a rider on the Policy to the Policyholder.
        </Text>

        <Text className="font-medium text-white mx-3 ">Additional Covers</Text>
        <Text className="font-medium text-white mx-3 ">
          · Death
        </Text>

        <Text className="font-medium text-white mx-3 ">
          · Accident Disability
        </Text>
        <Text className="font-medium text-white mx-60 ">
          · Hospital Cash Income
        </Text>
        
      </View>
    </SafeAreaView>
  );
}