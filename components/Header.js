import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title, type, color, numberOfLines }) => {

    const styleToApply = () => {
        switch (type) {
            case 1:
                return styles.title1;
            case 2:
                return styles.title2;
            case 3:
                return styles.title3;
            default:
                return styles.title1;
        }
    }

    return (
        <View>
            <Text style={[styleToApply(), color && { color: color }]} numberOfLines={numberOfLines}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title1: {
        fontFamily: "Inter-SemiBold",
        fontSize: 24,
        lineHeight: 29,
        color: "#022150"
    },

    title2: {
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        lineHeight: 22,
        color: "#022150"
    },

    title3: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        lineHeight: 19,
        color: "#022150"
    },

});
export default Header;