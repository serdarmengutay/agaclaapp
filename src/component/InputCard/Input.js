import React from "react";
import { View, TextInput, Text } from 'react-native';
import styles from './input.style';

function Input({ placeholder, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />

        </View >

    )
}

export default Input;