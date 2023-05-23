import React from "react";
import { View, Text, TextInput } from 'react-native';
import styles from './input.style';
import Icons from "../Icons/Icons";



function Input({ placeholder, value, onChangeText, isSecure, onPress }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
                onPressIn={onPress}
            />


        </View >

    )
}

export default Input;