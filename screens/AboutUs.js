import { View, Text, ScrollView, Image , ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AboutUs() {
  return (
    <SafeAreaView>
    <ImageBackground
    source={require("../assets/Images/greenunsplash.jpg")}
    style={{
      width: '100%', // applied to Image
      height: '100%' 
    }}>
    <View>
        <View>
            <TouchableOpacity></TouchableOpacity>
        </View>
        <View className='items-center mt-3'>
        <Text className='text-white text-2xl items-center'>About Us</Text>
        </View>
    </View>
    <View className='items-center bg-[#115E67] my-18 mx-4'>
        <ScrollView>
        <View className='items-center'><Image source={require("../assets/Images/logo.png")}/></View>
            <Text className='text-white text-lg'>
                efosnfsfsnfksjnfsjbdfjsbdjsnconcncscsc ch uhdgyigsgfiup
                gfgfgjbsdfbjsdhfbvhbh biubfslfobhfpsbfvhibsvibijvbksjfbv
                sbldkfbkhfbsbf svipobfvpibfpvibsbohbfspffobb  isgfygsgiyos
                gfpsfgbsoufgbpifbpbvipbfs ffiuasgfisbphssdb  f uh uidsh fviu 
                fiudv iuv ipgsdigsiud gvpiudsg fviud viu dvgiud iugdfvig gigdv s
                iug iys ysjg fviyg 8giughfwiuyfg7834gwf8w wr8ywwwaup[efpurf79e9
                urfhiufiug yugsifsjohdfvboashfbhjvygf biefbhuebyervhsbfih  igfeygs
                djfdshfbhuvyudbsbsjhdvbxjvzyf ipasghfpi hjfiugf sfduy byvb dhvb ijv
                hv]vugbsdiv b if uaisyuv s y vuifv ibv yfiv idygsdhjvsdvj svyvbjy ys
                fsgyuoslhvfduhvjbsdjvhbfjvhb dfvggfigfiyg ifgysgfisgdviysf sdhsbvr yf
                hsye aiybfiy fb ffsuhdvjbdjhvhvb afhbshjvdvbjdhvdvyhvsdvildvk ysgd boa
                svygvbytfwiegwvh f sh vslblv a hbah bhjbvb;akh hbdfkhvb kv;bsak aviab
                kjk;bvlfv kbhv bgvrylyia v hbhcm,mkhf iuh  byjhvsdfvuvshdvjhfvjsvkjsf
                vsjkdfhvjhv
            </Text>
        </ScrollView>    
    </View>
    </ImageBackground>
</SafeAreaView>
  )
}
