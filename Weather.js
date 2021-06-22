import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    }, 
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    }, 
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    }, 
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    }, 
    Clouds: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {

        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
};

export default function Weather( { temp, condition } ) {
    return (
        <LinearGradient
                colors={ weatherOptions["Clear"].gradient }
                styles={styles.container}
        >
            <StatusBar barStyle="light-content" />     
            <View style={styles.halfContainer} >
                <MaterialCommunityIcons 
                    size={ 96 } 
                    name={ weatherOptions["Clear"].iconName }
                    color="#f9f9f9"
                />
            <Text style={styles.temp}>{ temp }℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}> 
                <Text style={styles.title}>{weatherOptions["Clear"].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions["Clear"].subtitle}</Text>
            </View>
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
    },
    title: {
        fontSize: 54,
        fontWeight: "300",
        color: "#f9f9f9",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "#f9f9f9"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});