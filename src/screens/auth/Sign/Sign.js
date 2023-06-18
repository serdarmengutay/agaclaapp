import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

import styles from './Sign.style';

import { Formik } from 'formik';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Input from '../../../component/InputCard';
import Button from "../../../component/Button";

const initialFormValues = {
    UserName: '',
    UserMail: '',
    UserPhoneNumber: '',
    UserPassword: '',
};


function Sign({ navigation }) {

    const [show, setShow] = useState(true)
    const [isSecure, setisSecure] = useState(true)



    function showEye() {
        setShow(!show)
        setisSecure(!isSecure)
    }

    function handleTextLogin() {
        // navigation.navigate('LoginPage')
        navigation.goBack();

    }

    function handleFormSubmit(formValues) {
        console.log(formValues);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../../assets/icon/login.png')}
                style={{ width: 170, height: 170, alignSelf: 'center' }}
            />
            <Text style={styles.header}>Kayıt Ol</Text>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}>
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
                            <Text style={styles.text} onPress={handleTextLogin}>Hesabın var mı? Giriş Yap </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
};
export default Sign;