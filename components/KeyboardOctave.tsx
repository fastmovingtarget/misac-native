import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import KeyboardKey from "./KeyboardKey"
import { Octave, Note } from '@/types/MusicTypes';
import { keyActionHandler } from '@/types/HandlerTypes';

import { useOptions } from './contexts/OptionsContext';

export default function KeyboardOctave({octave,  keyDownHandler, keyUpHandler}:
  {octave: Octave, keyDownHandler : keyActionHandler, keyUpHandler : keyActionHandler}) {
  
  const [pressedNotes, setPressedNotes] = useState<string[]>([]);
  const {keySignature} = useOptions();

  const octaveTop : Note [] = keySignature.includes("\u266d") ? ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"] : ["c", "c\u266f", "d", "d\u266f", "e", "f", "f\u266f", "g", "g\u266f", "a", "a\u266f", "b"];
  const octaveBottom : Note [] = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white

  function onKeyDown(note : Note, octave : Octave){
    if(pressedNotes.includes(note))
      return;

    setPressedNotes([...pressedNotes, note]);

    keyDownHandler(note, octave);
  }

  function onKeyUp(note : Note, octave : Octave){
    const noteIndex = pressedNotes.findIndex((pressedNote) => note === pressedNote);
    if(noteIndex < 0)
      return;

    setPressedNotes([...pressedNotes].toSpliced(noteIndex, 1));

    keyUpHandler(note, octave);
  }

  return (
    <View style={styles.octaveContainer}>
        <View id={`octave-top-${octave}`} style={styles.octaveTop}>
          {octaveTop.map((octaveNote : Note) => {
            return <KeyboardKey key={`key-element-${octave}-${octaveNote}`} note = {octaveNote} octave={octave} pressed={pressedNotes.includes(octaveNote)} isTop={true} onPressIn={onKeyDown} onPressOut={onKeyUp}/>
          })}
        </View>
        <View id={`octave-bottom-${octave}`} style={styles.octaveBottom}>
          {
            octaveBottom.map((octaveNote) => {
              return <KeyboardKey key={`key-element-${octave}-${octaveNote}`} note = {octaveNote} octave={octave} pressed={pressedNotes.includes(octaveNote)} isTop={false} onPressIn={onKeyDown} onPressOut={onKeyUp}/>
            })
          }
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  octaveTop: {
    display:"flex",
    flexDirection:"row",
    flex:3
  },
  octaveBottom: {
    display:"flex",
    flexDirection:"row",
    flex:2
  },
  octaveContainer:{
    display:"flex",
    flexDirection:"column",
    flex:1
  }
});
