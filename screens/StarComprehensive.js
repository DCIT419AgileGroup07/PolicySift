import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StarComprehensive() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-left mt-8 mb-7">
        <View className=" mx-2">
          <TouchableOpacity onPress={() => navigation.navigate("StarLifeGeneralMain")}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center ">
        <Image source={require("../assets/Images/starlife.png")} />
      </View>

      <View className="flex-row justify-center">
        <Text className="font-extrabold mt-5 text-teal-900">
          Star Comprehensive Homeowners Policy
        </Text>
      </View>

      <View className="py-4 bg-[#115E67] mt-5 mb-5 mx-4 elevation rounded-xl ">
        <Text className="font-medium text-white mx-3 ">
          This policy is designed to cover all accidents that are likely to
          occur at home; loss or damage to your private dwelling(house) as well
          as your household goods and personal effect. The Comprehensive
          Homeowners insurance policy provides five main covers.
        </Text>

        <Text className="font-medium text-white mx-3 ">Points to note:</Text>
        <Text className="font-medium text-white mx-3 ">
          ·The first section covers the insured's building against Loss or
          damage caused by perils such as fire, explosion, lightning, storm,
          hurricane, tornado, flooding, earthquake, volcanic eruption, bursting
          or overflowing of water tanks, etc.
        </Text>

        <Text className="font-medium text-white mx-3 ">
          · The second section covers the insured’s contents against the above
          perils as well as burglary excluding theft.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · The third section covers the insured’s liability to the public.
        </Text>
        <Text className="font-medium text-white mx-3 ">
          · The fourth section of the policy provides cover for personal
          accident.
        </Text>
        <Text className="font-medium text-white mx-3 mb-1 ">
          · The fifth section provides the insured with the actual cost of
          renting an alternatively reasonable accommodation following an
          accidental damage to the building for the period necessary for
          reinstatement (maximum 12 months) for an amount not exceeding ten
          percent of the full value of the property per annum or the
          proportionate part thereof monthly.
        </Text>
      </View>
    </SafeAreaView>
  );
}