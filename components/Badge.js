import React, { useRef, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

const Badge = ({ badgeTitle }) => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const badgeWidth = {
        width: paddingHorizontal * 2 + width
    }

    return (
        <View
            style={[styles.badge, badgeWidth]}
        >
            <Text
                style={[styles.title]}
                onTextLayout={(event) => {
                    setWidth(event.nativeEvent.lines[0].width);
                }}
                ref={textRef}
            > {badgeTitle} </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    badge: {
        backgroundColor: "#145855",
        height: 22,
        justifyContent: 'center',
        borderRadius: 50
    },

    title: {
        fontFamily: "Inter-SemiBold",
        fontSize: 10,
        lineHeight: 12,
        color: "white",
        textAlign: 'center'
    },

});

export default Badge;