import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AllianzWealth() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-2 mb-2">
        <View className=" mx-2">
          <TouchableOpacity onPress={() => navigation.navigate("AllianzLifeMain")}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
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
        Allianz Insurance Company Ghana
        Limited 
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-2 mb-2 mx-4 elevation rounded-xl ">

      <Text className="font-small text-white mx-3 font-bold mb-2 ml-24 ">
      Allianz Term Life Plan 
                </Text>
        <View className="flex-row">
            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Death
                </Text>
                
                <Text className="font-small text-white mx-3 font-light ">
                We will pay the sum assured to the nominated beneficiary(ies) upon death of the insured
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb- w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Maturity
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                75% of total premiums paid will be returned without interest at the end of the policy term.
                </Text>
            </View>
        </View> 
        <View className="flex-row">
            <View className=" border-2 border-[#fcffff] rounded-md mb-60 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Permanent Disability
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                We will pay the death benefit less any indebtedness, where the disability is permanent
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Temporary Disability
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                We will waive premium up to a period of six months where the disability is a temporary one in nature.
                </Text>
            </View>
        </View> 
        

      </View>
    </SafeAreaView>
  );
}