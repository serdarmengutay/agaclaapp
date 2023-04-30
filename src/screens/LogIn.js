import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Input from '../component/InputCard/Input';
import Button from "../component/Button/Button";

import Lottie from 'lottie-react-native';

function LogIn({ navigation }) {

    const [userMail, setUserMail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    return (
        <SafeAreaView style={styles.container}>

            <Lottie
                style={styles.lottie}
                source={require('../assets/logo.json')} autoPlay />
            <Text style={styles.header}>Giriş Yap</Text>
            <Input
                placeholder="Email"
                onChangeText={setUserMail} />
            <Input
                placeholder="Şifre"
                onChangeText={setUserPassword} />
            <TouchableOpacity
                onPress={() => navigation.navigate('')}>
                <Text style={styles.text}>Şifreni mi Unuttun?</Text>
            </TouchableOpacity>
            <Button
                text="Giriş Yap" />

            <TouchableOpacity
                onPress={() => navigation.navigate('SigIn')}>
                <Text style={styles.text}>Hesabın yok mu? Kayıt Ol </Text>
            </TouchableOpacity>



        </SafeAreaView>

    )
}

export default LogIn;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    lottie: {
        height: 259,
        left: 5,
    },
    header: {
        color: '#34670C',
        width: 92,
        height: 29,
        left: 24,
        //top: 294,
        //font family gelecek
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: 600,
    },
    text: {
        //font family eklencek
        width: 181,
        height: 17,
        left: 105,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        color: '#9C9C9C',

    },
})