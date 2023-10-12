import React, { useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { loginUser } from "../api/User";
import globalStyle from "../assets/styles/globalStyle";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/reducers/UserSlice";
import { Routes } from "../navigation/Routes";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flexBackground]}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.bottomMargin}>
                    <Header type={1} title={"Welcome Back"} />
                </View>

                <View style={styles.bottomMargin}>
                    <Input
                        label={"Email"}
                        placeholder={"Enter your email..."}
                        onChangeText={(value) => setEmail(value)}
                        keyboardType={'email-address'}
                    />
                </View>

                <View style={styles.bottomMargin}>
                    <Input
                        label={"Password"}
                        placeholder={"Enter your password..."}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry
                    />
                </View>

                {error.length > 0 &&
                    <Text style={styles.error}>
                        {error}
                    </Text>
                }

                <View >
                    <Button
                        isDisabled={email.length <= 5 || password.length <= 8}
                        title={"Login"}
                        onPress={async () => {
                            let user = await loginUser(email, password);
                            if(!user.status){
                                setError(user.error);
                            }
                            else {
                                setError('');
                                dispatch(logIn(user.data));
                                navigation.navigate('Home');
                            }
                        }}
                    />
                </View>

                <Pressable style={styles.register} onPress={() => navigation.navigate('Register')}>
                    <Header color={"#156CF7"} type={3} title={"Don't have an account?"} />
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginTop: 20,
        flex: 1,
        justifyContent: 'center'
    },

    bottomMargin: {
        marginBottom: 24
    },

    register: {
        alignItems: 'center',
        marginTop: 24
    },

    error: {
        fontSize: 16,
        color: "red",
        marginBottom: 24
    },

});

export default LoginScreen;