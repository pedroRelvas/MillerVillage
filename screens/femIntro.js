import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import Madalena from './../assets/madalena.svg';


export default function FEMIntro({ navigation }) {
    function notAllowed() {
      console.log('Não disponível nesta versão!')
    }
  
    function pressHandler() {
      navigation.navigate("Set Time");
    }

    return (
        <View>
          <ImageBackground source={require('./../assets/city_with_overlay.png')} resizeMode="cover" style={styles.image}>
              <Madalena style={styles.madalena}></Madalena>
              <Text style={styles.modal}> Modal</Text>
              <Button title="Start" onPress={pressHandler}></Button>
              <Button title="Help" onPress={notAllowed}></Button>
            
          </ImageBackground>

            <StatusBar style="auto" />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      height: '100%',
      alignItems: 'flex-start',
    },
    madalena: {
    },
   /*  modal:{
      padding: 16,
      width: 200,
      height: 300,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.25
    } */
  })