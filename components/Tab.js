import React, { useRef, useState } from "react";

import { Pressable, StyleSheet, Text } from "react-native";

const Tab = ({ title, isInactive, onPress, tabId }) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;
    const tabWidth = {
        width: paddingHorizontal * 2 + width
    }

    return (
        <Pressable
            style={[styles.tab, isInactive && styles.inactiveTab, tabWidth]}
            onPress={() => onPress(tabId)}
        >
            <Text
                style={[styles.title, isInactive && styles.titleInactive]}
                onTextLayout={(event) => {
                    setWidth(event.nativeEvent.lines[0].width);
                }}
                ref={textRef}
            > {title} </Text>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    tab: {
        backgroundColor: "#2979F2",
        height: 50,
        justifyContent: 'center',
        borderRadius: 50
    },

    inactiveTab: {
        backgroundColor: "#F3F5F9"
    },

    title: {
        fontFamily: "Inter-Medium",
        fontSize: 14,
        lineHeight: 17,
        color: "white",
        textAlign: 'center'
    },

    titleInactive: {
        color: "#79869F"
    }

});

export default Tab;