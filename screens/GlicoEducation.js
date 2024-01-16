import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoEducation() {
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
        Enhanced GLICO Education Endowment Policy
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          The Enhanced GLICO Education Endowment Policy (E-GEEP) is essentially 
          a savings plan with insurance benefits designed for individuals to 
          accumulate cash for use in financing a child's and/or Policyholder's 
          education.
        </Text>

        <Text className="font-medium text-white mx-3 ">
          The E-GEEP primarily provides Child Education Protection Assurance 
          cover which ensures premium payment continuity until policy maturity 
          in the event of death or total permanent disablement of the 
          Policyholder.
        </Text>

        <Text className="font-medium text-white mx-3 ">
          The Policy also covers death and total permanent disability benefit 
          for the premium-paying guardian or parent. The E-GEEP does not 
          lapse and the Policyholder also enjoys Premium Holiday
        </Text>
        
        <Text className="font-medium text-white mx-3 mb-60 ">
          The Policyholder can make a Partial Withdrawal on the 
          accumulated savings amount annually. The policy term 
          is a minimum duration of 8 years and a maximum of 
          25 years.
        </Text>
      </View>
    </SafeAreaView>
  );
}