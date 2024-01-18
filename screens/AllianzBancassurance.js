import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AllianzBancassurance() {
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
             Bancassurance
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base ">
        <Text className="font-bold text-white mt-5 text-center">Bancassurance</Text>

        <Text className="font-medium text-white mt-2 mx-3 mb-10 ">
            We have partnered with various banks to provide our
            insurance offerings to their customers. As a customer of 
            any of our partner banks, this affords you the option of 
            getting all your life insurance needs at the banking halls and through other available distribution platforms available to 
            the bank.
        </Text>



    
      </View>
    </SafeAreaView>
  );
}
