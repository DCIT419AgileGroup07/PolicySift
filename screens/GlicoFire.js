import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function GlicoFire() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-4">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("GlicoGeneralMain")}
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
          Fire Insurance
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-7  elevation rounded-xl items-center">
        <Text className="font-medium text-white mt-5 mx-4 mb-10">
          Our Fire and Allied Perils policy has been designed to cover losses or
          damages to your property resulting from Fire, Explosion [specifically
          of gas used for domestic purposes] and Lightning. It also covers loss
          or damage aris ing from such perils as Impact, [usually by vehicles or
          animals], riot & strike, bursting or overflowing of water tanks,
          apparatus or pipes, flood, earthquake, hurricane, tornado, windstorm,
          cyclone, aircraft or any other aerial device. {"\n"}
          Your legal liabilities as owner of the premises in respect of loss of
          or damage to property, bodily injury or death suffered by third
          parties are also covered up to a limit of GHC20,000. {"\n"}
          Such properties as office equipment, stocks, raw materials, furniture
          and fittings, plants and other equipment may also be covered.
        </Text>
      </View>
    </SafeAreaView>
  );
}
