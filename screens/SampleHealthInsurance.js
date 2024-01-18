import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function (SampleHealthInsurance) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("HollardHealthMain")}
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
        <Text className="font-extrabold mt-5 text-teal-900 text-base">
            Sample Health Insurance 
        </Text>
      </View>
      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base ">
        <Text className="font-bold text-white mt-5 text-center">Sample Health Insurance</Text>

        <Text className="font-medium text-white mt-2 mx-3 mb-20">
            The sample documents provide examples of how a health plan might cover medical care
            in given situations, including coverage for individual and family plans, plan types, and coverage periods

        </Text>



    
      </View>
      

        
      
    </SafeAreaView>
  );
}
