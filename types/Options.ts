import { KeySignature, Octave } from "./MusicTypes"

export interface IOptions {
    volume : number,
    numberOfNotes : number,
    staveScaleFactor : number,
    keySignature : KeySignature,
    octaves : Octave[]
}

export interface IOptionsChanger {
    volume ? : number,
    numberOfNotes ? : number,
    staveScaleFactor ? : number,
    keySignature ? : KeySignature,
    octaves ? : Octave[]
}

export interface IOptionsContext extends IOptions {
    setOptionsHandler : (option : IOptionsChanger) => void
}