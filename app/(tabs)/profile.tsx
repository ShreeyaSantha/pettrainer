
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PROFILE TAB</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      alignItems: 'center',
      paddingTop: 50,
    },
  });
  