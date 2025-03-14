import {View, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import { KeySignature, Note, Octaves, PlayableNote, PlayedEnum } from '@/types/MusicTypes';
import { OctaveNotes } from '@/constants/OctaveNotes';
import { Keyboard } from '@/components/Keyboard';
import { Stave } from '@/components/Stave'
import OptionsMenu  from './OptionsMenu';
import { useOptions } from '@/components/contexts/OptionsContext';

export default function MusicPage(){
  const {numberOfNotes, octaves, keySignature} = useOptions();
   
  const [generatedNotes, setGeneratedNotes] = useState<PlayableNote[]>([]);

    useEffect(() => {
        generateNoteSet(octaves, numberOfNotes, keySignature, setGeneratedNotes);
    }, [numberOfNotes, octaves, keySignature]);

    console.log(generatedNotes);

    function keyDownHandler(note : Note, octave : string){
        let newGeneratedNotes = [...generatedNotes];
        const nextNote = newGeneratedNotes.findIndex(generatedNote => generatedNote.state === PlayedEnum.Unplayed || generatedNote.state === PlayedEnum.Unsuccessful);

        if(newGeneratedNotes[nextNote].note === note && newGeneratedNotes[nextNote].octave === octave
            || (newGeneratedNotes[nextNote].note === "c♭" && note === "b" && newGeneratedNotes[nextNote].octave === `${Number(octave) + 1}`)
            || (newGeneratedNotes[nextNote].note === "f♭" && note === "e" && newGeneratedNotes[nextNote].octave === octave )
            || (newGeneratedNotes[nextNote].note === "b\u266f" && note === "c" && newGeneratedNotes[nextNote].octave === `${Number(octave) - 1}`)
            || (newGeneratedNotes[nextNote].note === "e\u266f" && note === "f" && newGeneratedNotes[nextNote].octave === octave)
        ){
            newGeneratedNotes[nextNote].state = PlayedEnum.Successful;
            if(nextNote === newGeneratedNotes.length - 1)
                return generateNoteSet(octaves, numberOfNotes, keySignature, setGeneratedNotes);
        }
        else 
            newGeneratedNotes[nextNote].state = PlayedEnum.Unsuccessful;

        setGeneratedNotes(newGeneratedNotes);
    }

    return (
        <>
            <Stave noteSet={generatedNotes}/>
            <OptionsMenu />
            <View style={styles.keyboardContainer} >
                <Keyboard octaves={octaves || []} keyDownHandler={keyDownHandler} keyUpHandler={() => {return}}/>
            </View>
        </>
    )
}

function generateNoteSet(octaves : Octaves, numberOfNotes : number, keySignature : KeySignature, setGeneratedNotes : React.Dispatch<React.SetStateAction<PlayableNote[]>>){
    const notes : PlayableNote [] = [];
    
    if(!octaves || !octaves.length || !numberOfNotes)
      return; 

    for(let i = 0; i < numberOfNotes || 0; i++){
        
        // we want to generate a random note
        let newNote : PlayableNote;
        
        do{
            newNote = {
                note: OctaveNotes.keySignatureNotes[keySignature || "♮"][Math.floor(Math.random() * OctaveNotes.keySignatureNotes[keySignature || "♮"].length)],//the note is a random note from the key signature
                octave: octaves[Math.floor(Math.random() * octaves.length)],//the note's octave
                state: PlayedEnum.Unplayed//the note is unplayed as a default
            }
        }while(newNote.note === "c♭" && newNote.octave === octaves[0] || newNote.note === "b♯" && newNote.octave === octaves[octaves.length - 1])//IF the note is c♭ (b from the octave befor the first one) and the octave is the first octave 
                                                                                                                                                // OR the note is b♯ (c from the next octave) and the octave is the last octave, 
                                                                                                                                                // then we need to regenerate the note because it won't fit on our keyboard
       
        notes.push(newNote);
    }
    
    setGeneratedNotes(notes);
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flexDirection: 'column',
        flex:1
    }
})
