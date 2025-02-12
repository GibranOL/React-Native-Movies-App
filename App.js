import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import Header from './src/components/layout/Header';
import NavBar from './src/components/navigation/NavBar';  // <-- Import el NavBar
import MoviesContainer from './src/components/containers/MoviesContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Header />
          <NavBar />

        </NavigationContainer>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}