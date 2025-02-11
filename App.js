import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/layout/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Header />
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;