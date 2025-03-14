export type Octave = "1" | "2" | "3" | "4" | "5" | "6" | "7" ;
export type Octaves = Octave [];
export type Note =  "c\u266d" | "c" | "c\u266f" | 
                    "d\u266d" | "d" | "d\u266f" | 
                    "e\u266d" | "e" | "e\u266f" | 
                    "f\u266d" | "f" | "f\u266f" | 
                    "g\u266d" | "g" | "g\u266f" | 
                    "a\u266d" | "a" | "a\u266f" | 
                    "b\u266d" | "b" | "b\u266f"

export enum PlayedEnum {
    Successful,
    Unsuccessful,
    Unplayed
}

export type PlayableNote = {
    note : Note,
    octave : Octave
    state : PlayedEnum
};

export function isNote(input : string) : input is Note {
    return true;
}
                    
export type KeySignature = "\u266e" | 
"1\u266d" | "2\u266d" | "3\u266d" | "4\u266d" | "5\u266d" | "6\u266d" | "7\u266d" |
"1\u266f" | "2\u266f" | "3\u266f" | "4\u266f" | "5\u266f" | "6\u266f" | "7\u266f";