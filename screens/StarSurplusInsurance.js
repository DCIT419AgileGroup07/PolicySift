import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarSurplusInsurance() {
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
            Super Surplus Insurance Policy    
        </Text>

        <View className="flex-row mb-5 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mt-1 mx-2 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-3 text-center text-xs font-bold">
                Top-up Policy
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                This top-up policy can be opted along with the existing policy 
                to avail additional Sum Insured at an affordable premium.
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-2 text-center text-xs font-bold">
                Flexible Policy
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
                This policy can be opted on an Individual or Floater basis 
                with 7 family size options (i.e. 2A, 2A+1C, 2A+2C, 2A+3C, 1A+1C, 1A+2C, 1A+3C).
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
                Floater Entry Age            
            </Text>
            <Text className="text-teal-50 mt-2  text-xs font-medium">
                  Any person aged between 18 and 65 years can avail this policy. 
                  Dependent children are covered from the 91st day onwards up to 25 years.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
