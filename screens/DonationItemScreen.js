import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { useSelector } from "react-redux";
import globalStyle from "../assets/styles/globalStyle";
import BackButton from "../components/BackButton";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Header from "../components/Header";

const DonationItemScreen = ({ navigation, route }) => {

    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    const categoryInformation = route.params.categoryInformation;

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flexBackground]}>
            <ScrollView style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} />

                <Image source={{ uri: donationItemInformation.image }} style={styles.image} />

                <View style={styles.badge}>
                    <Badge title={categoryInformation.name} />
                </View>

                <Header type={1} title={donationItemInformation.name} />

                <Text style={styles.description}>{donationItemInformation.description}</Text>
            </ScrollView>

            <View style={styles.button}>
                <Button title={"Donate"} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15
    },

    image: {
        marginTop: 12,
        marginBottom: 24,
        width: "100%",
        height: 240,
        borderRadius: 5
    },

    badge: {
        marginBottom: 16
    },

    description: {
        marginTop: 7,
        marginHorizontal: 7,
        fontFamily: "Inter-Regular",
        fontSize: 14,
        marginBottom: 10
    },

    button: {
        marginHorizontal: 20,
        marginBottom: 10
    }

});

export default DonationItemScreen;