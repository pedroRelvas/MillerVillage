import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import Miller from './screens/miller';
import SetTime from './screens/setTime';
import FEMIntro from './screens/femIntro';
import Menu from './screens/menu';
import Feedback from './screens/feedback';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';




const Stack = createNativeStackNavigator();

export default function App() {
  async function loadFonts() {
    await Font.loadAsync({
    'work-sans-regular': require('./assets/fonts/WorkSans-Regular.ttf'),
    'work-sans-semibold': require('./assets/fonts/WorkSans-SemiBold.ttf'),
    'work-sans-medium': require('./assets/fonts/WorkSans-Medium.ttf'),
    'work-sans-extrabold-italic': require('./assets/fonts/WorkSans-ExtraBoldItalic.ttf'),
    'work-sans-bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    //'komrade-line': require('./assets/fonts/Komrade-Inline.otf'),
    //'gastro-pub-pressed': require('./assets/fonts/GastroPub-Pressed.ttf'),
    //'gastro-pub-filled': require('./assets/fonts/GastroPub-Filled.otf')
 
    });
    setFontsLoaded(true);
  }
  
  

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);
  
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Menu" component={Menu}/>
          <Stack.Screen name="FEM Intro" component={FEMIntro}/>
          <Stack.Screen name="Set Time" component={SetTime}/>
          <Stack.Screen name="Miller Countdown" component={Miller}/>
          <Stack.Screen name="Feedback" component={Feedback}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}