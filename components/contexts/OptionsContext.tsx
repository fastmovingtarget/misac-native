import {useContext, createContext, useState} from "react"
import { IOptions, IOptionsContext, IOptionsChanger } from "@/types/Options"
import { KeySignature } from "@/types/MusicTypes"

const OptionsContext = createContext<IOptionsContext>({
    volume: 50,
    numberOfNotes: 10,
    staveScaleFactor: 1,
    keySignature: "\u266e",
    octaves: ["4"],
    setOptionsHandler: () => {}
})

function OptionsProvider({children} : {children:React.ReactNode}){ 
    const [options, setOptions] = useState<IOptions>({
        volume: 50,
        numberOfNotes: 10,
        staveScaleFactor: 1,
        keySignature: "5\u266d",
        octaves: ["4", "5"],
    }); 

    console.log(options)

    const setOptionsHandler = ( option : IOptionsChanger) => {
        setOptions({...options, ...option});
    }

    return (
        <OptionsContext.Provider value={{...options, setOptionsHandler}}>
            {children}
        </OptionsContext.Provider>
    )
}

export default OptionsProvider;

export const useOptions = () => {
    return useContext(OptionsContext);
}