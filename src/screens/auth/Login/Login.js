import React from "react";
import { SafeAreaView, Text, View, Image } from 'react-native';

import styles from './Login.style';

import { Formik } from 'formik';

import Input from '../../../component/InputCard';
import Button from "../../../component/Button";

const initialFormValues = {
    UserMail: '',
    UserPassword: ''
};



function Login({ navigation }) {

    function handleFormSubmit(formValues) {
        console.log(formValues)
    }

    function handleTextSignUp() {
        navigation.navigate('SignPage')

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../../assets/icon/login.png')}
                style={{ width: 170, height: 170, alignSelf: 'center' }}
            />
            <Text style={styles.header}>Giriş Yap</Text>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.input_container}>
                        <Input
                            placeholder="Email"
                            value={values.UserMail}
                            onChangeText={handleChange('UserMail')}
                        />
                        <Input
                            placeholder="Şifre"
                            value={values.UserPassword}
                            onChangeText={handleChange('UserPassword')}
                            style={styles.input}
                        />
                        <Button
                            text="Giriş Yap"
                            onPress={handleSubmit} />
                        <Text style={styles.text} onPress={handleTextSignUp}>Hesabın yok mu? Kayıt Ol
                        </Text>
                        <Text style={styles.text}>Şifreni mi Unuttun?</Text>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
};
export default Login;