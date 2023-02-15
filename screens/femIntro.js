import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ImageBackground, Text, TextInput } from 'react-native';
import Madalena from './../assets/madalena.svg';


export default function FEMIntro() {
    function notAllowed() {
      console.log('Não disponível nesta versão!')
    }
  
    return (
        <View style={styles.container}>
          
          <ImageBackground source={require('./../assets/city_with_overlay.png')} resizeMode="cover" style={styles.image}>
            <View>
              <Madalena style={styles.madalena}></Madalena>
            </View>
            <View>
              <Text style={styles.modal}> Modal</Text>
              <TextInput 
                maxLength={30}>

                </TextInput>
            </View>
          </ImageBackground>
          {/* <ImageBackground 
          source={require('./../assets/icon.png')}
          resizeMode="cover" 
          style={styles.image}></ImageBackground> */}
         {/*  {modalIsVisible && <MainModal visible={modalIsVisible}></MainModal>} */}
          
            <StatusBar style="auto" />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    madalena: {
      marginHorizontal: 40,
      marginTop: 50
    },
    modal:{
      padding: 16,
      width: 200,
      height: 300,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.25
    }
  })