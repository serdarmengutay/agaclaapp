import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Formik } from 'formik';

import Input from '../component/InputCard/Input';
import Button from "../component/Button/Button";

import Lottie from 'lottie-react-native';

// import Icons from '../component/Icons/Icons';
// import { SvgXml } from 'react-native-svg';
// import invisible from '../../src/assets/icons/invisible.svg'



function LogIn({ navigation }) {

    function handleLogin(values) {
        console.log(values)
    }

    // const [userMail, setUserMail] = useState(null);
    // const [userPassword, setUserPassword] = useState(null);

    return (
        <SafeAreaView style={styles.container}>


            <Lottie
                style={styles.lottie}
                source={require('../assets/logo.json')} autoPlay />
            <Text style={styles.header}>Giriş Yap</Text>
            <Formik
                initialValues={{ UserMail: '', UserPassword: '' }}
                onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.input_container}>
                        <Input
                            placeholder="Email"
                            value={values.UserMail}
                            onChangeText={handleChange('UserMail')}

                        />
                        {/* <Icons /> */}
                        <Input
                            placeholder="Şifre"
                            value={values.UserPassword}
                            onChangeText={handleChange('UserPassword')}
                            style={styles.input}

                        //invisible={xml}

                        />


                        {/* <SvgXml width="15" height="75%" xml={invisible} /> */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate('')}>
                            <Text style={styles.text}>Şifreni mi Unuttun?</Text>
                        </TouchableOpacity>
                        <Button
                            text="Giriş Yap"
                            onPress={handleSubmit} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SigIn')}>
                            <Text style={styles.text}>Hesabın yok mu? Kayıt Ol </Text>
                        </TouchableOpacity>
                    </View>

                )}

            </Formik>
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