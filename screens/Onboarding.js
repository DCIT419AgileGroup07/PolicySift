import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/core';

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate('WelcomeScreen');
  }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#115E67',
            image: <Image
              style={{ width: 300, height: 300 }}
              source={require('../assets/Images/img1.png')} />,
            title: 'Your Path To Financial Security',
            subtitle: 'Discover Tailored Insurance Solutions Just for You',
          },
          {
            backgroundColor: '#115E67',
            image: <Image
              style={{ width: 300, height: 315 }}
              source={require('../assets/Images/img2.png')} />,
            title: 'Smart Coverage, Tailored to You',
            subtitle: 'Let PolicySift Analyze Your Needs for the Perfect Insurance Plan',
          },
          {
            backgroundColor: '#115E67',
            image: <Image
              style={{ width: 300, height: 300 }}
              source={require('../assets/Images/img3.png')} />,
            title: 'Effortless Premium Payments',
            subtitle: 'Safely Manage Your Insurance Payments with PolicySift - Your Financial Peace of Mind',
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#115E67"
  },
});
