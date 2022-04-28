import React from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {ThemeProvider} from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import { useFonts,
Raleway_700Bold, 
Raleway_400Regular,
Raleway_800ExtraBold,
Raleway_600SemiBold,
Raleway_900Black,
Raleway_500Medium } from '@expo-google-fonts/raleway';

import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_400Regular,
    Raleway_800ExtraBold,
    Raleway_600SemiBold,
    Raleway_900Black 
  });

  if (! fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>        
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}