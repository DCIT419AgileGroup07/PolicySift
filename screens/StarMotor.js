import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarMotor() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarLifeGeneralMain")}
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
        <Image source={require("../assets/Images/starlife.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900">
          Star Motor Insuarance Company
        </Text>
      </View>

      <ScrollView>
      <View className="bg-[#115E67] mt-5 mx-5 elevation rounded-xl items-center">
        <Text className="font-medium text-white mt-5 mx-3 ">
          Our motor policy is designed to cover the legal liabilities of our
          insured as a result of the use of the motor vehicle and loss or damage
          to his own vehicle. Under our motor portfolio, the following covers
          are pro vided: Third Party Fire & Theft and Comprehensive.
        </Text>
      <View>
      <Image source={require("../assets/Images/Frame95.png")} />
      </View>
      
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}
