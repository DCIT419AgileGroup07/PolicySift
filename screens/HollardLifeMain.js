import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HollardLifeMain() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-row justify-left mt-8 mb-1">
          <View className=" mx-2">
            <TouchableOpacity onPress={() => navigation.navigate("LifePolicy")}>
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

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
          <Text className="font-bold text-white">Hollard Life Insurance</Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarMotor")}
            style={{ width: 250, height: 180 }}
            className=" bg-teal-50 elevation mt-7  ml-12  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/FamilyHeart.png")}
              className="mt-7"
              style={{ width: 70, height: 70 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Adepa Family Plan{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("StarComprehensive")}
            style={{ width: 250, height: 180 }}
            className=" bg-teal-50 elevation mt-7  mx-12 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/SingleNeutralCircle.png")}
              className="mt-7"
              style={{ width: 70, height: 70 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Purple Employee Plan{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
