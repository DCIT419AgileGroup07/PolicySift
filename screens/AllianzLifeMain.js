import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AllianzLifeMain() {
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
          <Image source={require("../assets/Images/Allianz.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
          <Text className="font-bold text-white">ALLIANZ LIFE INSURANCE</Text>
        </View>
        <View className='mb-5'>
        <View className="flex-row justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzWealth")}
            style={{ width: 150, height: 130 }}
            className=" bg-teal-50 elevation mt-7 rounded-l items-center">
            <Image
              source={require("../assets/Images/familyinsuranceupdated_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Allianz Wealth {"\n"} Planner{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzFarewell")}
            style={{ width: 150, height: 130 }}
            className=" bg-teal-50 elevation mt-7 mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/funeralservice_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Allainz Farewell {"\n"} Plus{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzEduflex")}
            style={{ width: 150, height: 130 }}
            className="bg-teal-50 elevation mt-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/ChildInsurance_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
              Allianz Eduflex {"\n"} plan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzTerm")}
            style={{ width: 150, height: 130 }}
            className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/Endofservice_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
              Allianz Term {"\n"} Life{" "}
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
