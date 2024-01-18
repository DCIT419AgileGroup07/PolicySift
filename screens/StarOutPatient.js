import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarOutPatient() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarLifeHealthMain")}
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
        <Text className="font-extrabold mt-5 text-teal-900 text-base">
          Star Health Insuarance Company
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-4 elevation rounded-xl items-center">
        <Text className="text-teal-50 mt-3 mb-5 text-center  font-bold">
            Star Out Patient Care Insurance Policy       
        </Text>

        <View className="flex-row mb-5 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mt-1 mx-2 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-3 text-center text-xs font-bold">
               Cover Options
            </Text>
            <Text className="text-teal-50 mt-2  text-xs font-medium">
                Any individual or family (up to 6 members) can avail this policy.
                This policy has 4 Sum Insured options - GH. 25,000/50,000/75,000/1,00,00
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-2 text-center text-xs font-bold">
               Diagnostics, Physiotherapy and Pharmacy
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
               Expenses incurred towards Diagnostics, Physiotherapy 
               and Pharmacy at Networked Facility are covered.
            </Text>
          </View>
        </View>

        <View className="flex-row mb-20 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-1 text-center text-xs font-bold">
               Plan Options
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
               This policy has 3 plan options - Silver, Gold & Platinum, under which, 
               the Pre-Existing Diseases are covered after 48, 24 and 12 months respectively
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-2 mt-1 p-1  mb-5rounded-l"
          >
            <Text className="text-teal-50 mt-1 text-center text-xs font-bold">
               Ophthalmic Cover
            </Text>
            <Text className="text-teal-50 mt-2  text-xs font-medium">
               Expenses incurred towards Ophthalmic treatment out of accidental injuries are covered.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
