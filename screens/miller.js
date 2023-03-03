import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import Spin from './../assets/spin.svg'
/* import { View, StyleSheet, ImageBackground, Button, Text, TouchableOpacity  } from 'react-native';
import Spin from './../assets/spin.svg'
import React, { useState, useEffect, useRef } from 'react'; */

export default function Miller({ navigation }) {

  function notAllowed() {
    console.log('Não disponível nesta versão!')
  }

  function pressHandler() {
    navigation.navigate("Feedback");
  }

    const [recording, setRecording] = useState(null);
    const [sound, setSound] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [isSoundDetected, setIsSoundDetected] = useState(false);
    const [timer, setTimer] = useState(6);
  
    useEffect(() => {
      return () => {
        if (sound) {
          //unload the sound from memory
          sound.unloadAsync();
        }
      };
    }, [sound]);
  
    const getAudioPermission = async () => {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Audio permission not granted');
      }
    };
  
    const setupAudioMode = async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    };
  
    useEffect(() => {
      getAudioPermission();
      setupAudioMode();
    }, []);
  
    useEffect(() => {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      }
    }, [timer]);
  
    const startRecording = async () => {
      try {
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        setRecording(recording);
        recording.setOnRecordingStatusUpdate((status) => {
          console.log(status);
          if(status.peakPower > -20 && !isSoundDetected) {
            setIsSoundDetected(true)
          }
        });
        await recording.startAsync();
        setTimeout(() => {
          stopRecording();
        }, 6000);
      } catch (error) {
        console.error(error);
      }
    };
  
    const stopRecording = async () => {
      setRecording(null);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      const { sound } = await recording.createNewLoadedSoundAsync();
      setSound(sound);
      detectSound();
    };
  
    const detectSound = async (sound) => {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        sound.setIsLoopingAsync(true);
        sound.playAsync();
        handleSquareRotation()
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setIsSoundDetected(true);
            sound.stopAsync();
          }
        });
      }
    };
  
    const handleSquareRotation = () => {
      if (isSoundDetected) {
        setRotation(rotation + 10);
      }
    };
  
    return (
      <View onLayout={startRecording}>
        <ImageBackground source={require('./../assets/miller.png')} resizeMode="cover" style={styles.image}>
          {timer > 0 && <Text>{timer} seconds left</Text>}
          {timer === 0 && pressHandler()}
          <Spin
            style={{
              marginTop: 250,
              marginLeft: 60,
              transform: [{ rotate: `${rotation}deg` }]
            }}
            onLayout={handleSquareRotation}></Spin>
           </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      height: '100%',
    },
  }) 