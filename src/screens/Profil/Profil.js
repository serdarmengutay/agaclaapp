import React, { useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";



function Profil({ navigation }) {



    function goToMemberSign() {
        navigation.navigate('SignIn')
    }

    // const [text, onChangeText] = useState('');
    // const [number, onChangeNumber] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body_container}>
                <Button title="SignIn" onPress={goToMemberSign} />
            </View>

        </SafeAreaView>
    )
}

export default Profil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    input: {
        //position: 'absolute',
        width: 343,
        height: 47,
        left: 24,
        top: 345,
        backgroundColor: '#FFFFFF',
        borderColor: '#C8C8C8',
        borderStyle: 'solid',
        borderRadius: 8,
        borderWidth: 1,
    },
    body_container: {
        backgroundColor: 'yellow',
        position: 'absolute',
    }
})