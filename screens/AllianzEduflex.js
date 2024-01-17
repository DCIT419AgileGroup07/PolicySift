import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AllianzEduflex() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-2 mb-2">
        <View className=" mx-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("AllianzLifeMain")}
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
        <Image source={require("../assets/Images/img5.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-2 text-teal-900">
          Allianz Insurance Company Ghana Limited
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-2 mb-2 mx-4 elevation rounded-xl ">
        <Text className="font-small text-white mx-3 font-bold mb-2 ml-24 ">
          Allianz Eduflex plan
        </Text>

        <View className="flex-row">
          <View
            className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mb-1 mx-3 font-bold ">
              Natural Death (Policyholder)
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              We will pay 100% of your current sum assured, plus total savings
              to your named beneficiary(ies).
            </Text>
          </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb- w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Child’s Medical Expense
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                Your child will receive up to GHS 1,000 if injured accidentally.
                </Text>
            </View>
        </View> 
        <View className="flex-row">
            <View className=" border-2 border-[#fcffff] rounded-md mb-60 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Vehicular Death
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                200% of your current sum assured will be paid to your named beneficiary(ies).
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Permanent Disability
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                You will receive 100% of your current sum assured.
                </Text>
            </View>
        </View> 
        
          <View
            className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mx-3 font-bold ">
              Natural Death (Policyholder)
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              We will pay 100% of your current sum assured, plus total savings
              to your named beneficiary(ies).
            </Text>
          </View>

          <View
            className=" border-2 border-[#fcffff] rounded-md mb- w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mx-3 font-bold ">
              Child’s Medical Expense
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              Your child will receive up to GHS 1,000 if injured accidentally.
            </Text>
          </View>
        </View>
        <View className="flex-row">
          <View
            className=" border-2 border-[#fcffff] rounded-md mb-60 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mx-3 font-bold ">
              Vehicular Death
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              200% of your current sum assured will be paid to your named
              beneficiary(ies).
            </Text>
          </View>

          <View
            className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mx-3 font-bold ">
              Permanent Disability
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              You will receive 100% of your current sum assured.
            </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}
