import { Pressable, StyleSheet, Text } from "react-native";
import { GestureResponderEvent } from "react-native";
import { keyActionHandler } from "@/types/HandlerTypes";
import { Octave, Note } from "@/types/MusicTypes";

export default function KeyboardKey(
    {note, octave, pressed, isTop, onPressIn, onPressOut} :
    {note : Note, octave : Octave, pressed : boolean, isTop : boolean, onPressIn : keyActionHandler, onPressOut : keyActionHandler}){

    let flexRatio: 1 | 1.5 = 1;
    if((note === "c" || note === "e" || note === "f" || note === "b") && isTop)
        flexRatio = 1.5;

    let leftBorderWidth : 1 | 0 = 0;
    if(!(note.includes("\u266f") || note.includes("\u266d")))
        leftBorderWidth = 1;


    const styles = StyleSheet.create({
        keyboardKey: {
            backgroundColor: note.includes("\u266f") || note.includes("\u266d") ? (pressed ? "darkgrey" : "black") : (pressed ? "lightgrey" : "white"),
            borderColor:"black",
            borderStyle:"solid",
            borderLeftWidth:leftBorderWidth,
            flex:flexRatio
        },
        keyText:{
            color: note.includes("\u266f") || note.includes("\u266d") ? "white" : "black",
            textAlign:"center",
        }
    });

    function pressDownHandler(e : GestureResponderEvent ) : void {
        e.preventDefault();
        onPressIn(note, octave);
    }

    function pressUpHandler(e : GestureResponderEvent ) : void {
        e.preventDefault();
        onPressOut(note, octave);
    }

    return (
        <Pressable onPressIn={pressDownHandler} onPressOut={pressUpHandler} style={styles.keyboardKey}>
            {isTop ? <Text style={styles.keyText}>{note}</Text> : null}
        </Pressable>
    )
}

