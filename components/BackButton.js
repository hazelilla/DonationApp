import React, { useEffect, useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({onPress}) => {
    
    return (
        <Pressable onPress={() => onPress()} style={styles.container}>
            <Icon name="arrow-back" size={32} color="black" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        width: 44,
        height: 44,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default BackButton;