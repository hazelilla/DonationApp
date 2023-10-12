import React, { useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import globalStyle from "../assets/styles/globalStyle";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { createUser } from "../api/User";

const RegisterScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flexBackground]}>
            <View>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.bottomMargin}>
                    <Header type={1} title={"Hello and Welcome!"} />
                </View>

                <View style={styles.bottomMargin}>
                    <Input
                        label={"First & Last Name"}
                        placeholder={"Enter your full name..."}
                        onChangeText={(value) => setFullName(value)}
                    />
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

                {success.length > 0 &&
                    <Text style={styles.success}>
                        {success}
                    </Text>
                }

                <View >
                    <Button
                        isDisabled={fullName.length <= 2 || email.length <= 5 || password.length <= 8}
                        title={"Register"}
                        onPress={async () => {
                            let user = await createUser(fullName, email, password);
                            if (user.error) {
                                setError(user.error);
                            }
                            else {
                                setError('');
                                setSuccess("You have successfully registered.");
                                setTimeout(() => navigation.goBack(), 3000);
                            }
                        }}
                    />
                </View>


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

    error: {
        fontSize: 16,
        color: "red",
        marginBottom: 24
    },

    success: {
        fontSize: 16,
        color: "#28a745",
        marginBottom: 24
    }

});

export default RegisterScreen;