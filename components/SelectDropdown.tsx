import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function SelectDropdownButton({data, defaultValue, onSelect} : {data: string[], defaultValue : string, onSelect: (item: string) => void}){

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>(defaultValue);

    const styles = StyleSheet.create({
        dropdownMenuStyle:{
            flexDirection: 'column',
            backgroundColor: '#E9ECEF',
            width:"50%",
        },
        dropdownOptionsStyle:{
            flexDirection: 'column',
            backgroundColor: '#E9ECEF',
            maxHeight: 50,
            overflowY: 'scroll',
            overflow: 'hidden',
        },
        dropdownText:{
            backgroundColor: '#E9ECEF',
            fontSize: 20,
            textAlignVertical: 'center',
            textAlign: 'center',
        },

    })

    return (
        <View style={styles.dropdownMenuStyle}>
            <Pressable onPress={() => setOpen(!open)}>
                <Text style={styles.dropdownText}>{selectedItem}</Text>
            </Pressable>
            <ScrollView style={styles.dropdownOptionsStyle}>
                {open ? 
                    data.map((item, index) => 
                        <Pressable key={index} onPress={() => {
                            setSelectedItem(item);
                            onSelect(item);
                            setOpen(false);
                        }}>
                            <Text style={styles.dropdownText}>{item}</Text>
                        </Pressable>
                    ) : null}
            </ScrollView>
        </View>
    )

}