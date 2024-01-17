import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarHealthPremier() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarLifeHealthMain")} >
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/starlife.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900 text-base">
          Star Health Insuarance Company
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-4 elevation rounded-xl items-center">

        <Text className="text-teal-50 mt-3 mb-5 text-center  font-bold">
           Star Health Premier Insurances Policy
        </Text>

        <View className="flex-row mb-5 items-center justify-center">
          <View
            style={{ width: 165, height: 175}}
            className="border border-teal-50  mt-1 mx-2 p-1 rounded-l" >

            <Text className="text-teal-50 mt-1 mb-3 text-center text-xs font-bold">
                Health Check-Up Discount
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                10% premium discount will be given if the listed health check-ups are taken 45 days prior to the date of proposal
                and submitted the documents at the time of inception of this policy.
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-2 text-center text-xs font-bold">
                Cataract Treatment
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                Expenses incurred for Cataract treatment are covered up to
                the limits as mentioned in the Policy Clause.
            </Text>
          </View>
        </View>

        <View className="flex-row mb-20 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-1 text-center text-xs font-bold">
                Health Check-Up Discount   

            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                10% premium discount will be given if the listed health check-ups are taken 45 days prior to the date of proposal
                and submitted the documents at the time of inception of this policy.
            </Text>
          </View>

          <View style={{ width: 165, height: 175}} className="border border-teal-50 mx-2 mt-1 p-1  mb-5rounded-l" >
            <Text className="text-teal-50 mt-1 text-center text-xs font-bold">
                Unique Cover
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                Specially designed policy to cover people who are 50 
                years and above with no maximum entry age limit.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
