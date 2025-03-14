import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { useOptions } from './contexts/OptionsContext';
import { OptionsKeySignatureSelect } from './OptionsKeySignatureSelect';

export default function OptionsMenu({}){
    
    const [open, setOpen] = useState(false);

    const options = useOptions();

    const styles = StyleSheet.create({
        optionsMenu:{
            height:open ? "100%" : 45,
            width :open ? "50%" : 45,
            position:"absolute",
            top:0,
            right:0,
            backgroundColor:"rgba(248,248,248,0.9)",
            marginTop:20
        },
        icon:{
            width:40,
            height:40,
            margin:2.5
        },
        optionsVisible:{
            flexDirection:"column",
        },
        optionsItem:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"flex-start",
            position:"absolute",
        }
    })

    return (
        <View style={styles.optionsMenu}>
            <Pressable onPress={() => setOpen(!open)}>
                <Image style={styles.icon} source={require("@/assets/images/options.png")} />
            </Pressable>
            {open ? 
                <View style={styles.optionsVisible}>
                    <View style={styles.optionsItem}>
                        <OptionsKeySignatureSelect />
                    </View>
                    <View style={{...styles.optionsItem, top:50}}>
                        <Text>Number of Notes: </Text>
                        <TextInput 
                            defaultValue={`${options.numberOfNotes}`} 
                            onChangeText={(changedText) => options.setOptionsHandler({numberOfNotes:Number(changedText) < 12 ? Number(changedText) : 16})}
                            keyboardType="numeric"
                            maxLength={2}
                        />
                    </View>
                </View> : null}
        </View>
    )
}