import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

export default function AllianzWealth() {
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
      <ScrollView>
      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/Allianz.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold text-teal-900">
          Allianz Insurance Company Ghana Limited
        </Text>
      </View>


      <View className='bg-[#115E67] mx-2 rounded mb-16'>
        <View>
            <Text className="font-small text-white text-center font-bold my-3">
            Allianz Wealth Planner</Text>
        </View>

    
        <View className="flex-row justify-center mb-2">
            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                  Natural Death (Policyholder)
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                Payment of sum assured when death occurs plus 100% of the accumulated fund value.
                </Text>
            </View>

            
          <View
            className=" border-2 border-[#fcffff] rounded-md w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mb-1 mx-3 font-bold ">
              Temporary Disability
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              A premium waiver up to a period of six(6) months where disability
              is temporary in nature.
            </Text>
          </View>        
        </View>

        <View className='flex-row justify-center'>
        <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white my-1 mx-3 font-bold ">
                Permanent Disability
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                50% of the sum assured paid upon becoming permanently disabled.
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1 ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white my-1 mx-3 font-bold ">
                Partial Withdrawal
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                Partial withdrawal option once in a calendar year after three years of contributing to the policy
                </Text>
            </View>
        </View>

        <View className='items-center'>
          <Text className="font-small text-white mx-3 font-bold my-4">
            Natural Death (Policyholder)
          </Text>
        </View>

        <View className="flex-row justify-center mb-">
        <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}>
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}/>
            <Text className="font-small text-white mx-3 font-bold ">
              Natural Death (Policyholder)
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              Payment of sum assured when death occurs plus 100% of the
              accumulated fund value.
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
              Temporary Disability
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              A premium waiver up to a period of six(6) months where disability
              is temporary in nature.
            </Text>
          </View>
        </View>
        
        <View className="flex-row justify-center">
        <View
            className=" border-2 border-[#fcffff] rounded-md w-full mt-1"
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
              50% of the sum assured paid upon becoming permanently disabled.
            </Text>
          </View>

          <View
            className=" border-2 border-[#fcffff] rounded-md mb-5 w-full mt-1  ml-2 "
            style={{ width: 152, height: 200 }}
          >
            <Image
              source={require("../assets/Images/Vector.png")}
              className="mt-2 ml-12"
              style={{ width: 25, height: 20 }}
            />
            <Text className="font-small text-white mx-3 font-bold ">
              Partial Withdrawal
            </Text>
            <Text className="font-small text-white mx-3 font-light ">
              Partial withdrawal option once in a calendar year after three
              years of contributing to the policy
            </Text>
          </View>

        </View>


      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
