import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function GlicoLifeMain() {
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
          <Image source={require("../assets/Images/Glico.png")} />
        </View>

        <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-20 rounded-xl items-center">
          <Text className="font-bold text-white">GLICO LIFE INSURANCE</Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoFamilyLife")}
            style={{ width: 150, height: 130 }}
            className=" bg-teal-50 elevation mt-7  ml-4  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/familyinsuranceupdated_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              GlicoFamily Life {"\n"} Comprehensive{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoLifeSaving")}
            style={{ width: 150, height: 130 }}
            className=" bg-teal-50 elevation mt-7  mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/savingsbasics_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center font-medium">
              Enhanced Life {"\n"} Savings Plan{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoEducation")}
            style={{ width: 150, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-4  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/ChildInsurance_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
              Enhanced Glico {"\n"} Education {"\n"} Endowment Policy{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoFuneral")}
            style={{ width: 150, height: 130 }}
            className="bg-teal-50 elevation mt-7  mx-7 rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/funeralservice_1.png")}
              className="mt-7"
              style={{ width: 70, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
              Glico Funeral {"\n"} Policy{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mb-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoEndService")}
            style={{ width: 150, height: 130 }}
            className="bg-teal-50 elevation mt-7  ml-8  rounded-l items-center"
          >
            <Image
              source={require("../assets/Images/Endofservice_1.png")}
              className="mt-7"
              style={{ width: 130, height: 50 }}
            />
            <Text className="text-teal-800 mt-1 text-xs text-center  font-medium">
              Glico End of {"\n"} Service Benefit{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
