import { Navigation } from "react-native-navigation"

// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
}
