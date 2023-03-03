import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import Madalena from './../assets/madalena.svg';


export default function SetTime({ navigation }) {
    function notAllowed() {
      console.log('Não disponível nesta versão!')
    }

    function pressHandler() {
        navigation.navigate("Miller Countdown");
      }
  
    return (
        <View>
          <ImageBackground source={require('./../assets/city_with_overlay.png')} resizeMode="cover" style={styles.image}>
              <Madalena style={styles.madalena}></Madalena>
              <Text style={styles.modal}>Madalena</Text>
              <Text style={styles.modal}>Set your Time</Text>
              <View>
                <Button title="Menos">Menos</Button>
                <Text style={styles.modal}>6 sec.</Text>
                <Button title="Mais">Mais</Button>
              </View>

              <Button title="Go!" onPress={pressHandler}></Button>
              <Button title="Help" onPress={notAllowed}></Button>
            
          </ImageBackground>

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
  })