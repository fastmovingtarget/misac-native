import { useEffect } from 'react';
import { StyleSheet,View } from 'react-native';
// import { useAudioPlayer } from "expo-audio";
import {Audio } from "expo-av"

import KeyboardOctave from "./KeyboardOctave"
import { noteImports } from '@/constants/PianoNotes';
import { Octaves, Note, Octave } from '@/types/MusicTypes';
import { useOptions } from './contexts/OptionsContext';

export function Keyboard({octaves, keyDownHandler, keyUpHandler}:{octaves: Octaves, keyDownHandler : (note : Note, octave : Octave) => void, keyUpHandler : () => void}) {

  const { volume } = useOptions()

  async function onKeyDown(note : Note, octave : Octave) : Promise<void>{
    //console.log(`Key down: ${octave}:${note}`)
    const { sound } = await Audio.Sound.createAsync( noteImports[octave][note])
    await sound.playAsync();

    keyDownHandler(note, octave);

    // sound.unloadAsync();
    // const audioPlayer = useAudioPlayer(noteImports[octave][note]);
    // audioPlayer.play();
  }
  
  return (
    <View id={`keyboard`} style={styles.keyboard}>
      {
        octaves.map((octave) => {
            return <KeyboardOctave key={"octave-element-" + octave} octave={octave} keyDownHandler={onKeyDown} keyUpHandler={keyUpHandler}/>
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
    keyboard:{
        display:"flex",
        flexDirection:"row",
        flex:1
    }
  });