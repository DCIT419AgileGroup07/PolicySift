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

        <View className='bg-[#115E67] mt-5 mx-5 rounded-xl'>
        <View className="flex-row m-5">
          <TouchableOpacity
            // onPress={() => navigation.navigate("")} 
            style={{ width: 155, height: 130 }}
            className=" bg-[#43A9AF] elevation mt-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/image3.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-white mt-1 text-xs text-center font-medium">
            Glico Health Plan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate("")} 
            style={{ width: 155, height: 130 }}
            className=" bg-[#43A9AF] elevation mt-7  mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/image6.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-white mt-1 text-xs text-center font-medium">
            Glico Top-Up Scheme
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      
      </SafeAreaView>
  )
}