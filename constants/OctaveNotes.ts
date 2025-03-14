import { Note } from '../types/MusicTypes'

interface IOctaveNotes {
    naturals : Note [],
    all : Note [],
    allSharps : Note [],
    allFlats : Note [],
    keySignatureNotes : {
        "\u266e" : Note [],
        "1\u266f" : Note [],
        "2\u266f" : Note [],
        "3\u266f" : Note [],
        "4\u266f" : Note [],
        "5\u266f" : Note [],
        "6\u266f" : Note [],
        "7\u266f" : Note [],
        "1\u266d" : Note [],
        "2\u266d" : Note [],
        "3\u266d" : Note [],
        "4\u266d" : Note [],
        "5\u266d" : Note [],
        "6\u266d" : Note [],
        "7\u266d" : Note []
    },
    keySignatureOrder : {
        "\u266e" : Note [],
        "1\u266f" : Note [],
        "2\u266f" : Note [],
        "3\u266f" : Note [],
        "4\u266f" : Note [],
        "5\u266f" : Note [],
        "6\u266f" : Note [],
        "7\u266f" : Note [],
        "1\u266d" : Note [],
        "2\u266d" : Note [],
        "3\u266d" : Note [],
        "4\u266d" : Note [],
        "5\u266d" : Note [],
        "6\u266d" : Note [],
        "7\u266d" : Note []
    }
}



export const OctaveNotes : IOctaveNotes = {
    naturals : ["c", "d", "e", "f", "g", "a", "b"],
    all : ["c\u266d", "c", "c\u266f", "d\u266d", "d", "d\u266f", "e\u266d", "e", "e\u266f", "f\u266d", "f", "f\u266f", "g\u266d", "g", "g\u266f", "a\u266d", "a", "a\u266f", "b\u266d", "b", "b\u266f"],
    allSharps : ["c", "c\u266f", "d", "d\u266f", "e", "e\u266f", "f", "f\u266f", "g", "g\u266f", "a", "a\u266f", "b", "b\u266f"],
    allFlats : ["c\u266d", "c", "d\u266d", "d", "e\u266d", "e", "f\u266d", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"],
    keySignatureNotes : {
        "\u266e" : ["c", "d", "e", "f", "g", "a", "b"],
        "1\u266f" : ["c", "d", "e", "f\u266f", "g", "a", "b"],
        "2\u266f" : ["c\u266f", "d", "e", "f\u266f", "g", "a", "b"],
        "3\u266f" : ["c\u266f", "d", "e", "f\u266f", "g\u266f", "a", "b"],
        "4\u266f" : ["c\u266f", "d\u266f", "e", "f\u266f", "g\u266f", "a", "b"],
        "5\u266f" : ["c\u266f", "d\u266f", "e", "f\u266f", "g\u266f", "a\u266f", "b"],
        "6\u266f" : ["c\u266f", "d\u266f", "e\u266f", "f\u266f", "g\u266f", "a\u266f", "b"],
        "7\u266f" : ["c\u266f", "d\u266f", "e\u266f", "f\u266f", "g\u266f", "a\u266f", "b\u266f"],
        "1\u266d" : ["c", "d", "e", "f", "g", "a", "b\u266d"],
        "2\u266d" : ["c", "d", "e\u266d", "f", "g", "a", "b\u266d"],
        "3\u266d" : ["c", "d", "e\u266d", "f", "g", "a\u266d", "b\u266d"],
        "4\u266d" : ["c", "d\u266d", "e\u266d", "f", "g", "a\u266d", "b\u266d"],
        "5\u266d" : ["c", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d"],
        "6\u266d" : ["c\u266d", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d"],
        "7\u266d" : ["c\u266d", "d\u266d", "e\u266d", "f\u266d", "g\u266d", "a\u266d", "b\u266d"]
    },
    keySignatureOrder : {
        "\u266e" : [],
        "1\u266f" : ["f\u266f"],
        "2\u266f" : ["f\u266f", "c\u266f"],
        "3\u266f" : ["f\u266f", "c\u266f", "g\u266f"],
        "4\u266f" : ["f\u266f", "c\u266f", "g\u266f", "d\u266f"],
        "5\u266f" : ["f\u266f", "c\u266f", "g\u266f", "d\u266f", "a\u266f"],
        "6\u266f" : ["f\u266f", "c\u266f", "g\u266f", "d\u266f", "a\u266f", "e\u266f"],
        "7\u266f" : ["f\u266f", "c\u266f", "g\u266f", "d\u266f", "a\u266f", "e\u266f", "b\u266f"],
        "1\u266d" : ["b\u266d"],
        "2\u266d" : ["b\u266d", "e\u266d"],
        "3\u266d" : ["b\u266d", "e\u266d", "a\u266d"],
        "4\u266d" : ["b\u266d", "e\u266d", "a\u266d", "d\u266d"],
        "5\u266d" : ["b\u266d", "e\u266d", "a\u266d", "d\u266d", "g\u266d"],
        "6\u266d" : ["b\u266d", "e\u266d", "a\u266d", "d\u266d", "g\u266d", "c\u266d"],
        "7\u266d" : ["b\u266d", "e\u266d", "a\u266d", "d\u266d", "g\u266d", "c\u266d", "f\u266d"]
    }

}