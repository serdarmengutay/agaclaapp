import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Touchable } from "react-native";

import { Formik } from 'formik';

import Input from '../component/InputCard/Input';
import Button from "../component/Button/Button";

import Lottie from 'lottie-react-native';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

function SignIn({ navigation }) {
    const [show, setShow] = useState(true)
    const [isSecure, setisSecure] = useState(true)

    function handleSignIn(values) {
        console.log(values);
    }

    function showEye() {
        setShow(!show)
        setisSecure(!isSecure)
    }

    // const [userName, setUserName] = useState(null);
    // const [userMail, setUserMail] = useState(null);
    // const [userPhoneNumber, setUserPhoneNumber] = useState(null);
    // const [userPassword, setUserPassword] = useState(null);



    //TÜÜM ALANLARI DOLDURMAN GEREKTİĞNİ ÇALIŞTIRAN FONKSİYON GELECEK!
    //deneme




    return (
        <SafeAreaView style={styles.container}>

            <Lottie
                style={styles.lottie}
                source={require('../assets/logo.json')} autoPlay />
            <Text style={styles.header}>Kayıt Ol</Text>
            <Formik
                initialValues={{ UserName: '', UserMail: '', UserPhoneNumber: '', UserPassword: '', }}
                onSubmit={handleSignIn}>
                {({ handleSubmit, handleChange, values }) => (

                    <View>
                        <Input
                            placeholder="İsim"
                            value={values.UserName}
                            onChangeText={handleChange('UserName')} />
                        <Input
                            placeholder="Email"
                            value={values.UserMail}
                            onChangeText={handleChange('UserMail')} />
                        <Input
                            placeholder="Telefon numarası "
                            value={values.UserPhoneNumber}
                            onChangeText={handleChange('UserPhoneNumber')}
                        />

                        <Input
                            placeholder="Şifre"
                            value={values.UserPassword}
                            onChangeText={handleChange('UserPassword')}
                            isSecure={isSecure}

                            onPress={() => {

                                <TouchableOpacity onPress={showEye} style={styles.invisibleIcon} >
                                    {show ? <FontAwesome5
                                        name="eye-slash"
                                        size={14}
                                        style={styles.invisibleIcon}

                                    />
                                        : <FontAwesome5
                                            name="eye"
                                            size={14}
                                            style={styles.invisibleIcon}
                                        />}
                                </TouchableOpacity>

                            }}

                        />

                        <Button
                            text="Kayıt ol"
                            onPress={handleSubmit} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LogIn')}>
                            <Text style={styles.text}>Hesabın var mı? Giriş Yap </Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>
        </SafeAreaView>

    )
}

export default SignIn;

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
    invisibleIcon: {
        width: 20,
        height: 20,
        bottom: 35,
        left: 340,
        backgroundColor: 'red',
    }
})