import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}