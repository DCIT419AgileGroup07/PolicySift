import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function GlicoHealthMain() {
  const navigation = useNavigation();
  return (
      <SafeAreaView>
              <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("HealthPolicy")}
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
        GLICO HEALTH INSURANCE
        </Text>
      </View>
      </SafeAreaView>
  )
}