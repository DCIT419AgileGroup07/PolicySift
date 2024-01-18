import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function GlicoFamilyLife() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoLifeMain")}
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
        <Image source={require("../assets/Images/Glico.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900">
          GLICO Family Life Comprehensive
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          - Family Life Comprehensive Insurance Plan benefits:
        </Text>

        <Text className="font-medium text-white mx-3 ">
          - Guaranteed minimum lump sum for death, permanent disability, and
          critical illness
        </Text>
        <Text className="font-medium text-white mx-3 ">
          - Lump sum amount for beneficiaries upon death of policyholder or
          spouse
        </Text>

        <Text className="font-medium text-white mx-3 ">
          - Coverage for policyholder and two spouses
        </Text>
        <Text className="font-medium text-white mx-3 ">- Premium refund</Text>
        <Text className="font-medium text-white mx-3 ">
          - Total permanent disability coverage
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          - Critical illness coverage
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          - Lump sum for family sustenance upon death of policyholde
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          - Free medical check-ups and lifestyle medical consultancy
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          - Premium holiday option
        </Text>
        <Text className="font-medium text-white mx-3 mb-6 ">
          - No policy lapse
        </Text>
      </View>
    </SafeAreaView>
  );
}
