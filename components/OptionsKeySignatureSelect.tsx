import { Text, StyleSheet } from 'react-native';
import SelectDropdown from '@/components/SelectDropdown';
import { useOptions } from './contexts/OptionsContext';
import { KeySignature } from '@/types/MusicTypes';

const keySignaturesOptions : string [] = 
    ["♮", 
    "♯","♯♯","♯♯♯","♯♯♯♯","♯♯♯♯♯","♯♯♯♯♯♯","♯♯♯♯♯♯♯",
     "♭","♭♭","♭♭♭","♭♭♭♭","♭♭♭♭♭","♭♭♭♭♭♭","♭♭♭♭♭♭♭",];

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: 200,
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    labelText:{
        fontSize: 20,
        marginRight:10,
    }
});

export function OptionsKeySignatureSelect({}){
    const { keySignature, setOptionsHandler } = useOptions();

    return (
        <>
            <Text style={styles.labelText}>Key Signature: </Text>
            <SelectDropdown
                data={keySignaturesOptions}
                defaultValue={keySignature === "♮" ? "♮" : `${keySignature.charAt(1).repeat(parseInt(keySignature.charAt(0)))}`}
                onSelect={(selectedItem) => {
                    setOptionsHandler({keySignature: selectedItem === "♮" ? "♮" : `${selectedItem.length}${selectedItem.charAt(0)}` as KeySignature});
                }}
            />
        </>
    )
}