import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const Input = ({ label, placeholder, onChangeText, keyboardType, secureTextEntry }) => {

    const [value, setValue] = useState("");

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={(val) => { setValue(val); onChangeText(val) }}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontFamily: "Inter-Regular",
        fontSize: 22,
        color: "#36455A"
    },

    input: {
        fontSize: 18,
        marginTop: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(167, 167, 167, 0.5)'
    }

});

export default Input;