import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FamilyLovePlan() {
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
           Family Love Plan
        </Text>
      </View>

      <View className="bg-[#115E67] mt-5 mx-8 elevation rounded-xl text-base ">
        <Text className="font-bold text-white mt-5 text-center">Family Love Plan</Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            Family Love Plan is a funeral product that is designed to provide 
            financial protection to you and loved families to finance the cost of funeral expenses of your Family members.
        </Text>

        <Text className="font-bold text-white mt-4 mx-3 text-base text-center">
           Discover product details
        </Text>

        <Text className="font-medium text-white mt-2 mx-3 ">
            At Allianz, we understand this and are here to support you by providing you financial plan to ensure that those 
            that are left behind can celebrate a life well lived and to be able to continue with the plans and dreams the departed family member had for his/her loved ones
            {"\n"}
            The product is designed with options for the lower, middle and the affluent retail market segments. In essence, there is a plan for everyone in the market.
        </Text>

        

        <Text className="font-medium text-white mt-5 mx-3 mb-4 ">
           There are three benefit packages or Options:{"\n"}
          -Inclusive Love Package {"\n"}
          -Classic Love Package {"\n"}
          -Prestige Love Package {"\n"}
    
        </Text>
      </View>
    </SafeAreaView>
  );
}
