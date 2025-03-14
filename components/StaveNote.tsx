import { View, Text, StyleSheet } from 'react-native';
import { Note, Octave, PlayableNote, PlayedEnum } from '@/types/MusicTypes';
import { OctaveNotes } from '@/constants/OctaveNotes';
import { useOptions } from './contexts/OptionsContext';

export function StaveNote({note}:{note : PlayableNote}){

    let {staveScaleFactor, keySignature} = useOptions();
    
    staveScaleFactor = staveScaleFactor || 1;
    const c4Offset = staveScaleFactor * 15 * 4.5;

    const noteIndex = OctaveNotes.keySignatureNotes[keySignature].indexOf(note.note) + ((Number(note.octave) - 4) * 7);
    const noteOffset = c4Offset - (noteIndex * staveScaleFactor * 15 * 0.5);

    const noteColour = note.state === PlayedEnum.Successful ? "green" : note.state === PlayedEnum.Unsuccessful ? "red" : "black";
    
    const styles = StyleSheet.create({
        note:{
            fontSize:staveScaleFactor * 15 * 4,
            height:staveScaleFactor * 15 * 4,
            lineHeight:staveScaleFactor * 15 * 5.2,
            position:"relative",
            top: noteOffset,
            transformOrigin:`center ${Math.floor(staveScaleFactor * 15 * 3.5)}px`,
            transform:[{rotate: Number(note.octave) > 4 ? "180deg" : "0deg"}],
            flex:1,
            textAlign:"center",
            color:noteColour
        }
    });


    return (
        <Text style={styles.note}>&#x1D15F;</Text>
    )
}