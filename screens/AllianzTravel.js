import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AllianzTravel() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzGeneralMain")}
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
        <Text className="font-extrabold mt-1 text-teal-900">
          Allianz Insurance Company Ghana Limited
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl ">
        <Text className="font-bold text-white mt-5  text-base text-center">
          Travel Insuarnce
        </Text>

        <Text className="font-medium text-white mt-1 mx-3 ">
          Going on a business trip or flying home for the holidays? Whatever
          your reason may be, Allianz travel insurance gives you the peace of
          mind you need during your trip. Our offering is valid worldwide and
          fully compliant with the requirements for a Schengen visa.
          {"\n"} {"\n"} 24/7 phone assistance across the globe. {"\n"} {"\n"}{" "}
          Cover for medical emergencies while travelling
        </Text>

        <Text className="font-bold text-white  mt-5 mx-3 text-base text-center">
          What We Cover
        </Text>

        <Text className="font-medium text-white  mt-1 mx-3 ">
          - Emergency medical expenses {"\n"} {"\n"}- Hospitalization {"\n"}{" "}
          {"\n"}- Repatriation of remains {"\n"} {"\n"}- Loss of travel
          documents {"\n"} {"\n"}- Flight delay {"\n"} {"\n"}- Loss of luggage{" "}
          {"\n"} {"\n"}
        </Text>
      </View>
    </SafeAreaView>
  );
}
