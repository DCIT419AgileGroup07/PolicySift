import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HollardPersonal() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("HollardGeneralMain")}
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
        <Image source={require("../assets/Images/Hollard.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-3 text-teal-900 text-base">
          Personal Insurance
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl items-center">
        <Text className="font-bold text-white mt-5">Key Benefits</Text>

        <Text className="font-medium text-white mt-5 mx-3 ">
          Our personal injury insurance policy will compensate you if: {"\n"}
          -You are between the ages of 15 and 70 {"\n"}
          -You have sustained a bodily injury caused by a violent accident of
          external and visible means {"\n"}
          -The accident has resulted in death, permanent or temporary total
          disability and corresponding medical expenses {"\n"}
        </Text>

        <Text className="font-bold text-white mt-2 text-center">
          Personal Injury Cover Optional Benefits
        </Text>

        <Text className="font-medium text-white mt-5 mx-3 mb-4">
          We also offer optional extensions to your cover for these types of
          accidents: {"\n"}
          -Exposure to elements, starvation and/or thirst {"\n"}
          -Disappearance {"\n"}
          -Burn accidents causing disfigurement {"\n"}
          -An accident resulting in the need for a life support system for more
          than 2 consecutive days {"\n"}
        </Text>
      </View>
    </SafeAreaView>
  );
}
