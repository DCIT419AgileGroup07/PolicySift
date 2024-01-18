import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AssuredInvestmentHealth() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzHealthMain")}
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
        <Image source={require("../assets/Images/Allianz.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-3 text-teal-900 text-base">
            Assured Investment Plan
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base">
        <Text className="font-bold text-white mt-5 text-center">Assured Investment Plan</Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            With this long-term investment plan, prepare for your retirement with peace of mind.
        </Text>

        <Text className="font-bold text-white mt-4 mx-3 text-base text-center">
           Discover product details
        </Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            This policy is a long-term investment plan which enables you to save securely during your 
            active working years to be assured of adequate income in future when you have no desire or ability to work to generate income or when you have retired from active employment. Your investment premium as a policyholder is secure and earns an interest. You are guaranteed of absolute peace of mind that your investment benefit is assured to take care of your financial aspirations in line with your policy.
        </Text>

        <Text className="font-bold text-white mt-4 mx-3">
           KEY BENEFITS
        </Text>

        <Text className="font-medium text-white mt-2 mx-3 mb-4 ">
           -Discover product benefits{"\n"} 
           -Competitive interest on savings {"\n"}
           -Payment of death benefit in addition to investment account value when death occurs {"\n"}
           -Partial withdrawal and policy loan benefits of up to 70% and 90% of cash value respectively {"\n"}
    
        </Text>
      </View>
    </SafeAreaView>
  );
}
