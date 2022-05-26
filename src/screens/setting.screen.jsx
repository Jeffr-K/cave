import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const SettingScreen = (props) => {
  return (
    <View>
      <Text>
        Setting Screen
      </Text>
    </View>
  );
}

SettingScreen.options = {
  topBar: {
    title: {
      text: 'Settings'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
}
