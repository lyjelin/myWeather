import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
        iconName: "",
        gradient: []
    }, 
    Drizzle: {
        iconName: "",
        gradient: []
    }, 
    Rain: {
        iconName: "",
        gradient: []
    }, 
    Snow: {
        iconName: "",
        gradient: []
    }, 
    Atmosphere: {
        iconName: "",
        gradient: []
    }, 
    Clear: {
        iconName: "",
        gradient: []
    }, 
    Clouds: {
        iconName: "",
        gradient: []
    },
    Mist: {
        iconName: "",
        gradient: []
    }
};

export default function Weather( { temp, condition }) {
    return (
        <LinearGradient
                colors={ weatherOptions[condition].gradient }
                styles={styles.container}
        >
            <StatusBar barStyle="light-content" />     
            <View style={styles.halfContainer} >
                <MaterialCommunityIcons 
                    size={ 96 } 
                    name={weatherOptions[condition].iconName}
                    color="#f9f9f9"
                />
            <Text style={styles.temp}>{ temp }℃</Text>
            </View>
            <View style={styles.halfContainer} />
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "#f9f9f9"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});