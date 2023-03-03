import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Logo from './../assets/logo.svg';

export default function Menu({ navigation }) {
  const [numberTodaysFem, setNumberTodaysFem] = useState(0)
  const [userMoney, setUserMoney] = useState('1631')

  function pressHandler() {
    navigation.navigate("FEM Intro");
  }

  function notAllowed() {
    console.log('Não disponível nesta versão!')
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.background} source={require('./../assets/menuBackground.png')}>
        
        <ImageBackground resizeMode="contain" source={require('./../assets/paint.png')} style={{
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
          <Logo height={100}/>
          
        </ImageBackground>

        <View style={{ alignItems: 'center', alignContent: 'center',}}>
          <ImageBackground style={{width: 300, marginVertical: 30, height: 40, alignItems: 'center', paddingVertical:10}} source={require('./../assets/tagFEM.png')}>
            {/* <Text style={{fontFamily: "work-sans-semibold", color: 'white'}}>FEMs de hoje: {numberTodaysFem}/3</Text>
 */}
            <Text style={{color: 'white'}}>FEMs de hoje: {numberTodaysFem}/3</Text>
          </ImageBackground>
        </View>
          

        <ImageBackground resizeMode="contain" 
          style={{
            alignItems: 'center',
            width: '100%',
            paddingTop: 20
          }}
          source={require('./../assets/mainContainer.png')}>
          
            <TouchableOpacity 
              onPress={pressHandler} 
              activeOpacity={0.8}>
            <Image 
            style={{width: 130, height: 50, paddingTop: 20}}
            source={require('./../assets/buttonContinue.png')} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={notAllowed} 
            activeOpacity={0.8}>
            <Image 
            style={{width: 130, height: 50 }}
            source={require('./../assets/buttonFastFEM.png')} />
          </TouchableOpacity>
        
          <View style={{width: 100, alignItems: 'center'}}>
            <ImageBackground resizeMode="stretch" style={{marginVertical: 30, alignItems: 'center', width: 150,
            paddingVertical:20}} source={require('./../assets/tagMoney.png')}>
             
              <Text style={{ color: 'white', fontSize: 12}}>{userMoney}$</Text>
            {/*   <Text style={{fontFamily: "work-sans-medium", color: 'white', fontSize: 12}}>{userMoney}$</Text>
             */}
            </ImageBackground>
          </View>
          
        </ImageBackground>

        <View style={styles.secButtonsContainer}>
          <TouchableOpacity 
            onPress={notAllowed} 
            activeOpacity={0.8}>
            <Image 
            style={{width: 140, height: 50 }}
            source={require('./../assets/buttonNewGame.png')} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={notAllowed} 
            activeOpacity={0.8}>
            <Image 
            style={{width: 140, height: 50 }}
            source={require('./../assets/buttonTutorial.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9F814F',
    color: "#fff"
  },
  background: {
    height: '100%',
  },
  mainButtonsContainer:{
  },
  secButtonsContainer:{
    alignItems: 'center'
  },
  tinyLogo: {
  },
});

