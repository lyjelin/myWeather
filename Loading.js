import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading( { condition }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>
                Getting my Weather
                console.log(condition);
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#333333",
        fontSize: 30
    }
});