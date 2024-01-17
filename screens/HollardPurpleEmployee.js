import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HollardPurpleEmployee() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("HollardLifeMain")}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={35}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/Hollard.png")} />
      </View>

  

      <View className="py-2 bg-[#115E67] mt-2  mx-20 rounded-xl items-center">
        <Text className="font-bold text-white">Hollard Life Insurance</Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          Employees of every organization, remain the most vital asset. Every 
          progressive organization is keen on protecting its cherished asset; 
          thus, the wellbeing of employees becomes paramount for the 
          sustenance of any business.
        </Text>

        <Text className="font-medium text-white mx-3 ">
          Hollard Life, as a family oriented brand, with several years of 
          experience, understands and recognizes the importance of 
          ensuring that organizations have adequate insurance cover for their 
          employees and their families. Unlike the limited Workmen’s 
          Compensation cover, the Purple Employee Plan provides a more 
          comprehensive, adequate and substantial cover at competitive 
          premiums. The Purple Employee Plan offers a 24 hour protection to 
          employees throughout their employment.</Text>
        <Text className="font-medium text-white mx-3 ">
          The Plan comprehensively covers the following 
          contingencies:
        </Text>

        <Text className="font-light text-white mx-3 ">
          · Death (Natural and Accidental)
        </Text>
        <Text className="font-light text-white mx-3 ">
          · Total and Permanent Disability
        </Text>
        <Text className="font-light text-white mx-3 ">
          · Accidental Total Partial Disability
        </Text>
        <Text className="font-light text-white mx-3 ">
          · Accidental Temporary Disability
        </Text>
        <Text className="font-light text-white mx-3 ">
          · Accident Medical Reimbursement
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Critical Illness
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Health Screening
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Purple Monthly Grocery Plan
        </Text>
        <Text className="font-light text-white mx-3 mb-20">
          · Workmen’s Compensation
        </Text>
      </View>
    </SafeAreaView>
  );
}
