import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HealthEssentialPlan() {
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
            Essential Health Plan
        </Text>
      </View>
      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base ">
        <Text className="font-bold text-white mt-5 text-center">Essential Health Plan</Text>

        <Text className="font-medium text-white mt-2 mx-3 mb-20">
            All health insurance plans are required to help pay for essential health benefits,
             including outpatient care, lab tests, prescription medicines, preventive and wellness services, and chronic disease management


        </Text>



    
      </View>
      

        
      
    </SafeAreaView>
  );
}
