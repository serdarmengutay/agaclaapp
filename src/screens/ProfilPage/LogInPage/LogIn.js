import React from "react";
import { TextInput } from "react-native";

import styles from "./LogIn.style";

function LogIn() {

    // function navigateToPage(){
    //     navigation.navigate('FidanDik')
    // }

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.body_container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="placeholder"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />


            </View>

        </View>

    )
}

export default LogIn;

