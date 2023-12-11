import React, { useEffect } from 'react';
import { BackHandler, View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
// import { NavigationContainer } from '@react-navigation/native';
// import Navbar from '../components/Navbar';

export default function WhatPolicy() {
  const navigation = useNavigation();

  
  return (
    // <NavigationContainer independent={true}>
    //   <Navbar/>
    // </NavigationContainer>
    <View>
      <Text>WhatPolicy</Text>
    </View>
  );
}
