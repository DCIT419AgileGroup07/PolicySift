import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function GlicoLifeSaving() {
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
          Enhanced Life Savings Plan
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          This is the accumulated lump sum (savings plus interest) payable to
          the life assured upon the maturity of the policy or upon the earlier
          death of the life assured during the term of the policy.
        </Text>

        <Text className="font-medium text-white mx-3 ">
          Protection Benefits:
        </Text>
        <Text className="font-medium text-white mx-3 ">
          The Plan also has riders, which provide insurance or pure risk cover
          to ensure that upon the occurrence of an assured event, a stated
          amount of benefit is payable to the life insured or his beneficiary.
        </Text>

        <Text className="font-medium text-white mx-3 ">· Term (Death)</Text>
        <Text className="font-medium text-white mx-3 ">
          · Accident Indemnity
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · THospital Cash Income
        </Text>
        <Text className="font-medium text-white mx-3 ">
          There are other provisions: -
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Partial Withdrawal
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · Policy Loan Escalator for inflation protection
        </Text>
        <Text className="font-medium text-white mx-3 ">· Incontestability</Text>
        <Text className="font-medium text-white mx-3 ">· Non-forfeiture</Text>
        <Text className="font-medium text-white mx-3 mb-60 ">
          · Reinstatement
        </Text>
      </View>
    </SafeAreaView>
  );
}
