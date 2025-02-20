import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';



import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        {/* Ponemos NavigationContainer aquí para que envuelva a AppStack */}
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

