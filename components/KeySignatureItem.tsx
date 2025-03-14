import { Text, StyleSheet } from "react-native"
import { Note, isNote } from "../types/MusicTypes"
import { OctaveNotes } from "@/constants/OctaveNotes";


export function KeySignatureItem ({note, children}:{note:Note, children:string}){
    const baseNoteHeight = 15;
    const staveScaleFactor = 1;

    const c4Offset = staveScaleFactor * baseNoteHeight * 7;
    let correspondingNatural : Note;
    let correspondingNaturalString : string = note.charAt(0);

    if(isNote(correspondingNaturalString))
        correspondingNatural = correspondingNaturalString;
    else 
        return null;
    
    const noteIndex = OctaveNotes.naturals.indexOf(correspondingNatural) + 7;
    const noteOffset = c4Offset - (noteIndex * baseNoteHeight * 0.5);
    
    const styles = StyleSheet.create({
        keySignatureText:{
            position:"relative",
            fontSize:baseNoteHeight * (note.charAt(1) === "\u266f" ? 2 : 3),
            height:baseNoteHeight * (note.charAt(1) === "\u266f" ? 2 : 3),
            lineHeight:baseNoteHeight * (note.charAt(1) === "\u266f" ? 2 : 3),
            top:noteOffset - (note.charAt(1) === "\u266f" ? 0 : baseNoteHeight * 0.75 ),
        }
    })

    return <Text style={styles.keySignatureText}>{note.charAt(1)}</Text>
}