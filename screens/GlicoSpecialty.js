import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GlicoSpecialty() {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <View className='flex-row justify-left mt-8 mb-4'>
            <View className=' mx-2'><TouchableOpacity onPress={() => navigation.navigate("GlicoGeneralMain")}>
            <MaterialCommunityIcons name='chevron-left' size={50} color={'black'}/></TouchableOpacity></View>
    </View>

    <View className='flex-row justify-center '>
            <Image source={require("../assets/Images/Glico.png")} />
    </View>

    <View className='flex-row justify-center'>
        <Text className='font-extrabold mt-5 text-teal-900 text-base'>
            Specialty Risk Insuarnce  
        </Text>
    </View>

    <View className="bg-[#115E67] mt-5 mx-5  elevation rounded-xl items-center">
        
            <Text className='font-bold text-white mt-5'>
                Our Specialty Risk Insurance 
            </Text>

            <Text className='font-medium text-white mt-4 mx-3 mb-5 '>
                Our Upstream and Downstream portfolio of products covers:  {"\n"}
                Products covered under this portfolio would include the following: {"\n"} {"\n"}

                -Oil Rigs and Platforms {"\n"}
                -Pipe Lines  {"\n"}
                -Filling Stations {"\n"}
                -Gas Terminals {"\n"}
                -Tank Farms {"\n"}
                -Operators Extra Expenses {"\n"}
                -Cost of Controlling Well Under Fire {"\n"}
                -Cost of Re-drilling {"\n"}
                -Oil Seepage and Pollution (Clean Up Costs and Third Part Liabilities)  {"\n"}
                -Marine Vessels – Hull/ Cargo {"\n"}
                -Employee Properties/Welfare Policies {"\n"}
                -Employers Liability {"\n"}
                -Extra Cover as desired by the Operator 




            </Text>

            

            
    </View>
   </SafeAreaView>
  )
}