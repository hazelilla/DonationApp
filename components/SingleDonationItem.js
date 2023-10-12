import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Header from "./Header";
import Badge from "./Badge";

const SingleDonationItem = ({ uri, donationTitle, price, badgeTitle, onPress, donationItemId }) => {
    return (
        <Pressable onPress={() => {onPress(donationItemId)}}>
            <View>
                <View style={styles.badge}>
                    <Badge badgeTitle={badgeTitle} />
                </View>
                {uri && (
                <Image source={{uri}} style={styles.image} resizeMode={'cover'}/>
                )}
            </View>

            <View style={styles.donationInfo}>
                <Header title={donationTitle} type={3} color={"#0A043C"} numberOfLines={1}/>
                <View style={styles.priceContainer}>
                    <Header title={'$' + price.toFixed(2)} type={3} color={"#156CF7"} />
                </View>
            </View>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    image: {
        width: 155,
        height: 170,
        borderRadius: 20
    },

    badge: {
        position: 'absolute',
        zIndex: 1,
        top: 13,
        left: 10
    },

    donationInfo: {
        marginTop: 16
    },

    priceContainer: {
        marginTop: 5
    }

});


export default SingleDonationItem;