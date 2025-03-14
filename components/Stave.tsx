import { View, Text, StyleSheet } from 'react-native';
import { StaveNote } from '@/components/StaveNote';
import { OctaveNotes } from '@/constants/OctaveNotes';
import { Note, PlayableNote } from '@/types/MusicTypes';
import { KeySignatureItem } from './KeySignatureItem';
import { useOptions } from './contexts/OptionsContext';

export function Stave({noteSet} : {noteSet:PlayableNote[]}){

    const {staveScaleFactor, keySignature} = useOptions();
    const baseNoteHeight = 15 * (staveScaleFactor || 1);

    const keySignatureElements : Note[] = OctaveNotes.keySignatureOrder[keySignature];

    const styles = StyleSheet.create({
        staveLine: {
            borderColor:"black",
            borderStyle:"solid",
            borderBottomWidth:1,
            height: (staveScaleFactor || 1) * baseNoteHeight
        },
        staveContainer: {
            position:"relative",
            top:0,
            left:0,
            paddingTop: (staveScaleFactor || 1) * baseNoteHeight * 2,
            paddingBottom: (staveScaleFactor || 1) * baseNoteHeight * 3,
        },
        staveLineContainer: {
            position:"fixed",
            height:  (staveScaleFactor || 1) * baseNoteHeight * 5,
        },
        itemsContainer:{
            height: (staveScaleFactor || 1) * baseNoteHeight * 11,
            position:"absolute",
            flexDirection:"row",
            width:"100%",
            paddingRight: 45
        },
        clef:{
            fontSize: (staveScaleFactor || 1) * baseNoteHeight * 4,
            height:  (staveScaleFactor || 1) * baseNoteHeight * 8,
            textAlignVertical:"center",
            alignItems:"center",
            position:"relative",
            top: (staveScaleFactor || 1) * baseNoteHeight * 1.4,
            width:"auto"
        },
        notesContainer:{
            flexDirection:"row",
            alignContent: "space-around",
            flex:1
        },
        keySignatureContainer:{
            flexDirection:"row",
            width: "auto"
        },
        keySignatureText:{
            position:"relative",
            fontSize: (staveScaleFactor || 1) * baseNoteHeight * 2,
            height: (staveScaleFactor || 1) * baseNoteHeight * 2,
            lineHeight: (staveScaleFactor || 1) * baseNoteHeight * 2,
            top: (staveScaleFactor || 1) * baseNoteHeight * 2.4,
        }
    });

    return (
        <View style={styles.staveContainer}>
            <View style={styles.staveLineContainer}>
                <View style={styles.staveLine}></View>
                <View style={styles.staveLine}></View>
                <View style={styles.staveLine}></View>
                <View style={styles.staveLine}></View>
                <View style={styles.staveLine}></View>
            </View>
            <View style={styles.itemsContainer} >
                <Text style={styles.clef}>&#x1D11E;</Text>
                <View style={styles.keySignatureContainer}>
                    {
                            keySignatureElements.map((note : Note, index : number) => {
                                return <KeySignatureItem key={note + index}note={note}>&#9839;</KeySignatureItem>
                        })
                    }
                </View>
                <View style={styles.notesContainer}>
                    {
                        noteSet.map((note : PlayableNote, index : number) => {
                            return <StaveNote note={note} key={note.note + index} />
                        })
                    }
                </View>
            </View>
        </View>
    )
}