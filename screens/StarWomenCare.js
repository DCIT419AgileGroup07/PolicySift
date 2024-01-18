import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarWomenCare() {
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

      <View className="bg-[#115E67] mt-5 mx-5 elevation rounded-xl items-center">
        <Text className="text-teal-50 mt-3 mb-5 text-center  font-bold">
          Star Women Care Insurance Policy
        </Text>
        <View className="flex-row mb-5 justify-center">
          <View
            style={{ width: 160, height: 160 }}
            className="border border-teal-50  mt-1 mx-2 rounded-l">
            <Text className="text-teal-50 mt-1 mb-6 text-center text-xs font-bold">
              Maternity Benefit
            </Text>
            <Text className="text-teal-50 mt-1 ml-2 text-xs font-medium">
              Delivery expenses including the normal and Caesarean section (both
              pre-natal and post-natal) are covered up to the limits mentioned
              in the policy clause.
            </Text>
          </View>

          <View
            style={{ width: 160, height: 160 }}
            className="border border-teal-50 mx-2 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 text-center text-xs font-bold">
              Hospitalisation Expenses for Treatment of New Born Baby
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              Hospitalisation expenses for the treatment of newborn are covered
              including vaccination expenses up to 12 months.
            </Text>
          </View>
        </View>

        <View className="flex-row mb-6 justify-center">
          <View
            style={{ width: 160, height: 160 }}
            className="border border-teal-50  mx-2 mt-1 p-1 rounded-l"
          >
            <Text className="text-teal-50 mt-1 mb-2 text-center text-xs font-bold">
              Ante-Natal Care (Pregnancy Care)
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              This policy covers Outpatient expenses incurred for ante-natal
              care after confirmation of pregnancy up to the limits specified
            </Text>
          </View>

          <View
            style={{ width: 160, height: 160 }}
            className="border border-teal-50 mx-2 mt-1 p-1  mb-5rounded-l"
          >
            <Text className="text-teal-50 mt-1 text-center text-xs font-bold">
              Bariatric Surgery
            </Text>
            <Text className="text-teal-50 mt-1  text-xs font-medium">
              Hospitalization expenses incurred for Bariatric surgical
              procedures are covered up to the limits of GH. 2,50,000/- and GH.
              5,00,000/- which are inclusive of pre and post hospitalization
              expenses.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
