import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoFuneral() {
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
          GLICO Funeral Policy
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          TThe GLICO Funeral Policy is a whole life assurance plan which pays 
          the sum assured upon the death of the life insured. The plan is 
          designed to provide funds to meet funeral expenses and incidental 
          costs after the death of a loved one.
        </Text>

        <Text className="font-medium text-white mx-3 ">Benefits</Text>
        <Text className="font-medium text-white mx-3 ">
          The policy provides the following benefits:
        </Text>

        <Text className="font-medium text-white mx-3 ">
          · Natural and accidental death
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Total Permanent Disability
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · One week and one-year memorial
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Loyalty or Cashback
        </Text>
        <Text className="font-medium text-white mx-3 mb-60 ">
          · Premium Holiday
        </Text>
      </View>
    </SafeAreaView>
  );
}