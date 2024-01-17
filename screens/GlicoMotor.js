import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function GlicoMotor() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoGeneralMain")}
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
        <Text className="font-extrabold mt-5 text-teal-900 text-base">
          Motor Insurance
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 p-2 elevation rounded-xl items-center">
        <Text className="font-bold text-white mt-5">
          THIRD PARTY MOTOR INSURANCE
        </Text>

        <Text className="font-medium text-white mt-5 mx-3 mb-10">
          This is our minimum cover and it covers your liabilities to third
          parties in respect of damage caused to the property [ies] of such
          third party or injury/death to the third parties as a result of the
          use of your vehicle. {"\n"} {"\n"}
          Our standard Third Party policy has a limit on the liability for
          property damage. However there is an option for an increase in the
          limit upon request. This benefit, however, comes with an additional
          premium charge. {"\n"} {"\n"}
          Your choice of the Third Party Motor Insurance policy would not cover
          any loss or damage to your own vehicle. {"\n"} Please choose our
          Comprehensive Motor Insurance Policy to have this risk covered
        </Text>
      </View>
    </SafeAreaView>
  );
}
