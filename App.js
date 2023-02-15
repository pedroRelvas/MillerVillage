import { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './screens/menu';
import FEMIntro from './screens/femIntro';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    'WorkSansRegular': require('./assets/fonts/WorkSans-Regular.ttf'),
    /* 'work-sans-semibold': require('./assets/fonts/WorkSans-SemiBold.ttf'),
    'work-sans-medium': require('./assets/fonts/WorkSans-Medium.ttf'),
    'work-sans-extrabold-italic': require('./assets/fonts/WorkSans-ExtraBoldItalic.ttf'),
    'work-sans-bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    'komrade-line': require('./assets/fonts/._Komrade-Inline.otf'),
    'gastro-pub-pressed': require('./assets/fonts/._GastroPub-Pressed.ttf'),
    'gastro-pub-filled': require('./assets/fonts/._GastroPub-Filled.otf') */
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text style={{ fontFamily: 'WorkSansRegular', fontSize: 30, color: '#000' }}>A carregar...</Text>;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
          <Stack.Screen 
            name="FEM Intro" 
            component={FEMIntro}
          />
         {/*  <Stack.Screen name="Splash Screen" component={Splash}/> */}
          
        </Stack.Navigator>  
      </NavigationContainer>  
    </View>
  );
}