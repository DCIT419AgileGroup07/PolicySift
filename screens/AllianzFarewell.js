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
        <Text className="font-extrabold text-teal-900">
        Allianz Insurance Company Ghana
        Limited 
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-2 mx-4 elevation rounded-xl ">

      <Text className="font-small text-white mx-3 font-bold mb-2 ml-24 justify-center items-center ">
      Allianz Farewell  Plus 
                </Text>
        <View className="flex-row">
            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Accidental death
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                Allianz Life shall pay 200% of the Sum Assured of the policy. No waiting period applies.
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb- w-full mt-1  ml-2 "style={{width: 152, height: 200}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Death after waiting period
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                Allianz Life shall pay 100% of the current sum assured of the policy.
                </Text>
            </View>
        </View> 
        <View className="flex-row">
            <View className=" border-2 border-[#fcffff] rounded-md mb-60 w-full mt-1  ml-2 "style={{width: 152, height: 220}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mb-1 mx-3 font-bold ">
                Loyalty benefit
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                If a policyholder consistently pays premiums, every 2 years, the policy holder will enjoy a benefit worth one (1) month premium
                </Text>
            </View>

            <View className=" border-2 border-[#fcffff] rounded-md mb-2 w-full mt-1  ml-2 "style={{width: 152, height: 220}} >
            <Image source={require("../assets/Images/Vector.png")} className='mt-2 ml-12' style={{width: 25, height: 20}} />
                <Text className="font-small text-white mx-3 mb-1 font-bold ">
                Waiver premium
                </Text>
                <Text className="font-small text-white mx-3 font-light ">
                For policyholder who started the policy at ages between 18 and 50, premium payment will cease upon attainment of age 60 or upon death, which ever happens first.
                </Text>
            </View>
        </View> 
        

      </View>
    </SafeAreaView>
  );
}