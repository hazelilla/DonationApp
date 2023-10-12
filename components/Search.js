import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({onSearch}) => {
    const textInputRef = useRef(null);
    const handleFocus = () => {
        textInputRef.current.focus();
    };

    const [search, setSearch] = useState('');
    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        onSearch(searchValue);
    }

    return (
        <Pressable style={styles.searchContainer} onPress={handleFocus}>
            <Icon name="search" size={22} color="#25C0FF" />
            <TextInput 
                style={styles.input} ref={textInputRef} 
                value={search}
                onChangeText={(value) => handleSearch(value)}
                placeholder={"Search"}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "#F3F5F9",
        height: 50,
        borderRadius: 15
    },

    input: {
        flex: 1,
        marginLeft: 6,
        height: "100%",
        fontFamily: "Inter-Regular",
        fontSize: 14,
        lineHeight: 14,
        color: "#686C7A"
    },

});

export default Search;