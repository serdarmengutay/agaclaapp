import React from "react";

import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import styles from './Login.style';



import { Formik } from 'formik';

import Input from '../../../component/InputCard';
import Button from "../../../component/Button";

import Lottie from 'lottie-react-native';
// import { Image } from "react-native-svg";





function Login({ navigation }) {

    function handleLogin(values) {
        console.log(values)
    }

    // const [userMail, setUserMail] = useState(null);
    // const [userPassword, setUserPassword] = useState(null);

    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={require('../../../assets/icon/login.png')}
                style={{ width: 170, height: 170, alignSelf: 'center' }}
            />


            {/* <Lottie
                style={styles.lottie}
                source={require('../../../assets/logo.json')} autoPlay /> */}
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

                        <Button
                            text="Giriş Yap"
                            onPress={handleSubmit} />
                        <TouchableOpacity
                            style={styles.forgotPass}
                            onPress={() => navigation.navigate('SigIn')}>
                            <Text style={styles.text}>Hesabın yok mu? Kayıt Ol </Text>
                            <Text style={styles.text}>Şifreni mi Unuttun?</Text>

                        </TouchableOpacity>
                    </View>

                )}

            </Formik>
        </SafeAreaView>

    )

};


export default Login;







