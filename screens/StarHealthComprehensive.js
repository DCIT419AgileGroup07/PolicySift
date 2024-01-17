import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarHealthComprehensive() {
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
          Star Comprehensive Insurance Policy
        </Text>
        <View className="flex-row mb-5 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mt-1 mx-2 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-3 text-center text-xs font-bold">
              PED Buy-Back
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              On payment of additional premium, the waiting period for
              Pre-Existing Diseases can be reduced from 3 years to 1 year this
              is an optional cover
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-2 text-center text-xs font-bold">
              Outpatient Cover
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              Outpatient consultation and outpatient treatment (Dental &
              Ophthalmic) expenses are covered up to the limits mentioned in the
              policy clause.
            </Text>
          </View>
        </View>

        <View className="flex-row mb-20 items-center justify-center">
          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50  mx-1 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-1 text-center text-xs font-bold">
              Hospital Cash
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              A cash benefit for each completed day in the hospital is provided
              up to the limits mentioned in the policy clause for a maximum of 7
              days per hospitalisation and 120 days per policy period.
            </Text>
          </View>

          <View
            style={{ width: 165, height: 175 }}
            className="border border-teal-50 mx-2 mt-1 p-1  mb-5rounded-l"
          >
            <Text className="text-teal-50 mt-1 text-center text-xs font-bold">
              Automatic Restoration of Sum Insured
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              On exhaustion of the basic Sum Insured during the policy period,
              100% of the Sum Insured will be restored once in the policy year
              that can be utilised for illness or disease for which claims were
              already made.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
