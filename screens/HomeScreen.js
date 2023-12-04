import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the next screen after 3 seconds
      navigation.reset({
        index: 0,
        routes: [{ name: 'Onboarding' }],
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{ alignItems: 'center', marginBottom: 75 }}
          source={require('../assets/Images/Ellipse.png')}
        />
      </View>
      <ActivityIndicator size="large" color="#4ECFD4" />
      <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold', marginTop: 30 }}>
        POLICY SIFT
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#115E67",
    paddingTop: 100,
  },
});
