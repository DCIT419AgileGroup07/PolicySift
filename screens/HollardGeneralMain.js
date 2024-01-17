import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HollardGeneralMain() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-row justify-left mt-8 ">
          <View className=" mx-2">
            <TouchableOpacity
              onPress={() => navigation.navigate("GeneralPolicy")}
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

        <View className="py-4  bg-[#115E67] mb-7 mt-6 mx-20 rounded-xl items-center">
          <Text className="font-bold text-white">
            HOLLARD GENERAL INSURANCE
          </Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("HollardPersonal")}
            style={{ width: 155, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/Allrisk.png")}
              className="mt-7"
              style={{ width: 50, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Personal Insurance {"\n"} Policy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("HollardHome")}
            className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center"
            style={{ width: 155, height: 130 }}
          >
            <Image
              source={require("../assets/Images/Familyinsurance.png")}
              className="mt-6"
              style={{ width: 70, height: 50 }}
            />

            <Text className="text-teal-800 mt-3 text-xs  text-center font-medium">
              Home Insuarance{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row mb-5 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("HollardTravel")}
            style={{ width: 155, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/plane.png")}
              className="mt-6"
              style={{ width: 130, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-center text-xs font-medium">
              {" "}
              Travel Insurance{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: 155, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/motor.png")}
              className="mt-5"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-center text-xs font-medium">
              Motor Insurance{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
