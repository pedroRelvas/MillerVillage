import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import { useState } from 'react';
import Logo from './../assets/logo.svg';
import IconButton from './../components/iconButton/iconButton';
import { Ionicons } from '@expo/vector-icons'


export default function Menu({ navigation }) {
  const [numberTodaysFem, setNumberTodaysFem] = useState('')
  const [userMoney, setUserMoney] = useState('')

  function pressHandler() {
    navigation.navigate("FEM Intro");
  }

  function notAllowed() {
    console.log('Não disponível nesta versão!')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../')}>
        <IconButton>
          <Ionicons 
            name="md-remove" 
            size={24}
            color="white" />
        </IconButton>
        <Button title="icon"></Button>
          <Logo height={150}/>
        
        <Text style={{fontFamily: "work-sans-bold"}}>FEMs de hoje: /3</Text>

        <View style={styles.mainButtonsContainer}>
          <Button title="Continue" onPress={pressHandler}></Button>
          <Button title="FEM Rápida" onPress={notAllowed}></Button>
          <Text style={{color: "#fff", paddingTop: 20, textAlign: 'center'}}>{userMoney}$</Text>
        </View>

        <View style={styles.secButtonsContainer}>
          <Button title="Novo Jogo" onPress={notAllowed}></Button>
          <Button title="Tutorial" onPress={notAllowed}></Button>
        </View>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9F814F',
    alignItems: 'center',
    padding: 25,
    color: "#fff"
  },
  mainButtonsContainer:{
    backgroundColor: '#5F4122',
    borderRadius: 25,
    paddingHorizontal: 75,
    paddingVertical: 30 
  },
  secButtonsContainer:{

  },
  tinyLogo: {
  },
});

