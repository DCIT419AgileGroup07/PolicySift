import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HollardHealthMain() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-row justify-left mt-8 mb-1">
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
          <Image source={require("../assets/Images/Hollard.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
             <Text className='font-bold text-white'>HOLLARD HEALTH INSURANCE</Text>
          
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("HealthInsurancePlan")} 
            style={{ width: 155, height: 130 }}
            className=" bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/motor.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Health Insurance Plan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("EssentialHealthPlan")} 
            style={{ width: 155, height: 130 }}
            className=" bg-teal-50 elevation mt-7  mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/Homeowner.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
                 Essential Health Plan
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row mb-5 justify-center">
          <TouchableOpacity
            
            style={{ width: 155, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/Accident_1.png")}
              className="mt-4"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
                Sample Health Insurance                
            </Text>
          </TouchableOpacity>

          
        </View>

     
      </ScrollView>
    </SafeAreaView>
  );
}
