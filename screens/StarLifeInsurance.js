import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StarLifeInsurance() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-2 mb-2">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarLifeLifeMain")}
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
          Employee Security Plan
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-extrabold text-center mb-3 text-white">Employee Security Plan</Text>
        <Text className="font-medium text-white mx-3 mb-3 ">
          The Employee Security Plan [ESP] is a comprehensive group life policy
          which also provides optional cover for a section of the employee’s
          family.
        </Text>
        <Text className="font-medium text-white mx-3 mb-2 ">MAIN BENEFITS</Text>
        <Text className="font-medium text-white mx-3 mb-2 ">
          -A lump sum payment equal to the sum assured as stated in the Policy
          Schedule will be paid to you in the event of:
        </Text>

        <Text className="font-medium text-white mx-3 mb-3">
          ·Death resulting from natural or accidental causes on or off the job
        </Text>

        <Text className="font-medium text-white mx-3 mb-3 ">
          · Total and Permanent disability arising from disease or injury
        </Text>
        <Text className="font-medium text-white mx-3 mb-4 ">
          OPTIONAL BENEFITS
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Total Temporary Disability
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Medical benefit up to 10% of the Capital Sum Assured
        </Text>
        <Text className="font-medium text-white mx-3 mb-4 ">
          · Death of a Spouse, Child, parent(s) or parent(s) in-law.
        </Text>
        <Text className="font-medium text-white mx-3 mb-4 ">
          LEVEL OF BENEFITS
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          The levels of benefits are at the discretion of the policyholder. The
          capital benefit which is payable in the event of death and permanent
          total disability is normally determined as multiples of the annual
          salary of a staff.
        </Text>
      </View>
    </SafeAreaView>
  );
}
