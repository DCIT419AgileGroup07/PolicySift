import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AssuredChildEducation() {
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
            Assured Child Education Plan
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base">
        <Text className="font-bold text-white mt-5 text-center">Assured Child Education Plan</Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            Ensure the best prospects for your children by building up savings to finance their studies.        </Text>

        <Text className="font-bold text-white mt-4 mx-3 text-center text-base">
           Discover product details
        </Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            It is the dream of every parent and guardian to provide quality and uninterrupted education for their ward. 
            Our Assured Child Education policy provides parents a secure financial solution to fund their children’s education through its various stages. The policy guarantees the payment of school fees (benefit amount) and provides maintenance allowance to enable uninterrupted quality education of children whether or not the parent/guardian is alive or disabled.
        </Text>

        <Text className="font-bold text-white mt-4 mx-3">
           KEY BENEFITS
        </Text>

        <Text className="font-medium text-white mt-2 mx-3 mb-1 ">
           -Discover product benefits{"\n"} 
           -Guaranteed payment of sum assured at maturity {"\n"}
           -Waiver of premium benefit in the event of death or total permanent disability {"\n"}
           -25% of sum assured as maintenance benefit annually in the event of death or total permanent disability {"\n"}
           -Policy loan of up to 70% of surrender value{"\n"}

    
        </Text>
      </View>
    </SafeAreaView>
  );
}
