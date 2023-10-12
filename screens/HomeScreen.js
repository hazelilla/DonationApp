import React, { useEffect, useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import globalStyle from "../assets/styles/globalStyle";
import Header from "../components/Header";
import SingleDonationItem from "../components/SingleDonationItem";
import { useSelector, useDispatch } from "react-redux";
import { resetToInitialState, updateFirstName } from "../redux/reducers/UserSlice";
import Search from "../components/Search";
import Tab from "../components/Tab";
import { updateSelectedCategoryId } from "../redux/reducers/CategoriesSlice";
import { updateSelectedDonationId } from "../redux/reducers/DonationsSlice";

const HomeScreen = ({ navigation }) => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const donations = useSelector(state => state.donations);

    const [donationItems, setDonationItems] = useState([]);

    

    useEffect(() => {
        const items = donations.items.filter(
            value => value.categoryIds.includes(categories.selectedCategoryId)
        );
        setDonationItems(items);
    }, [categories.selectedCategoryId]);

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flexBackground]}>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerText}>Hello, </Text>

                        <View style={styles.username}>
                            <Header title={user.displayName} />
                        </View>
                    </View>

                    <Image source={{ uri: user.profileImage }} style={styles.profileImage} resizeMode={'contain'} />
                </View>

                <View style={styles.searchBox}>
                    <Search />
                </View>

                <Pressable style={styles.bannerContainer}>
                    <Image
                        source={require('../assets/images/image.png')}
                        resizeMode={'contain'}
                        style={styles.bannerImage}
                    />
                </Pressable>

                <View style={styles.categoryHeader}>
                    <Header title={"Select Category"} type={2} />
                </View>

                <View style={styles.categories}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
                        renderItem={({ item }) =>
                            <View style={styles.categoryItem} key={item.categoryId}>
                                <Tab
                                    tabId={item.categoryId}
                                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>}
                    />
                </View>

                {donationItems.length > 0 && (
                    <View style={styles.donationsContainer}>
                        {donationItems.map(value => {
                            const categoryInformation = categories.categories.find(
                                val => val.categoryId === categories.selectedCategoryId);
                            return (

                                <View key={value.donationItemId} style={styles.singleDonationItem}>
                                    <SingleDonationItem
                                        uri={value.image}
                                        onPress={selectedDonationId => {
                                            dispatch(updateSelectedDonationId(selectedDonationId))
                                            navigation.navigate("DonationItem", {
                                                categoryInformation
                                            });
                                        }}
                                        donationItemId={value.donationItemId}
                                        donationTitle={value.name}
                                        badgeTitle={categoryInformation.name}
                                        price={parseFloat(value.price)}
                                    />
                                </View>
                            )
                        })}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: "Inter-SemiBold",
        color: "#636776"
    },

    username: {
        marginTop: 5
    },

    profileImage: {
        width: 50,
        height: 50
    },

    searchBox: {
        marginHorizontal: 24,
        marginTop: 20,
    },

    bannerContainer: {
        marginTop: 20
    },

    bannerImage: {
        width: "100%",
        height: 180,
    },

    categories: {
        marginLeft: 24,
        marginTop: 20
    },

    categoryItem: {
        marginRight: 10
    },

    categoryHeader: {
        marginHorizontal: 24,
        marginTop: 10
    },

    donationsContainer: {
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    singleDonationItem: {
        maxWidth: "49%",
        marginVertical: 15,
    }

});
export default HomeScreen;