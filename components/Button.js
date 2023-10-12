import React from "react";

import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({title, isDisabled, onPress}) => {
    return (
        <Pressable  disabled={isDisabled} 
                    style={[styles.button, isDisabled && styles.disabledButton]}
                    onPress={() => onPress()}
        >
            <Text style={styles.title}> {title} </Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2979F2",
        height: 55,
        justifyContent: 'center',
        borderRadius: 50
    },

    disabledButton: {
        opacity: 0.5
    },

    title: {
        fontFamily: "Inter-Medium",
        fontSize: 16,
        lineHeight: 19,
        color: "white",
        textAlign: 'center'
    }

});

export default Button;