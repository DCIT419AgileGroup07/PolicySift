import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, CommonActions } from "@react-navigation/core";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function TandC() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/Images/greenunsplash.jpg")}
        style={{
          width: "100%", // applied to Image
          height: "100%",
        }}
      >
        <View className="mt-8">
          <View className="my-auto">
            <View className="flex-row mb-3">
              <View className="">
                <TouchableOpacity
                  className="left-0 ml-2"
                  onPress={() => navigation.dispatch(CommonActions.goBack())}
                >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={45}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
              <Text className="text-white text-2xl font-semibold mt-2 mx-12 text-center">
                Terms and Conditions
              </Text>
            </View>
          </View>
          <View className="items-center bg-white my-4 mx-4 rounded-3xl">
            <ScrollView>
              <View className="items-center">
                <Image source={require("../assets/Images/logo.png")} />
              </View>
              <View className="items-center mb-2">
                <Text className="text-[#115E67] text-xl text-center font-bold">
                  Introducing Policy Sift: Your One-Stop Insurance App
                </Text>
              </View>
              <View className="mx-4 ">
                <View classsname="flex-row">
                  <Text className="text-[#115E67] text-lg text-center">
                    <View className="">
                      <Text className="text-[#115E67] text-lg font-bold">
                        Welcome!
                      </Text>
                    </View>
                    These rules explain how you can use the Policy Sift app and
                    website. By using these, you agree to follow these rules.
                    Here's the important stuff:
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    Be 18+
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    {" "}
                    You have to be an adult to use Policy Sift.
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    Keep it legal
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    Don't use Policy Sift for anything illegal or bad.
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    Your stuff
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    {" "}
                    You own your insurance info, but we can use it to improve
                    Policy Sift (don't worry, we'll always be respectful)
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    No warranties
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    We try our best, but the app and website are "as is".
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    Protect us
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    If someone sues us because of you, you have to cover us.
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    We can kick you out
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    We can stop you from using Policy Sift if you break the
                    rules.
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    We can change these rules
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    We'll let you know if we do.
                  </Text>
                </View>

                <View>
                  <Text className="text-[#115E67] text-lg text-center font-bold">
                    Questions?
                  </Text>
                  <Text className="text-[#115E67] text-lg text-center">
                    Contact us at [email address].
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
