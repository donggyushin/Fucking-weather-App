import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';


const weatherCases = {
    Thunderstorm : {
        colors : ["#00EEB9", "#2363E4"],
        iconName : "ios-thunderstorm",
        title : "Thunderstorm in the house",
        content : "Can get a electronic shock outside"
    },
    Drizzle : {
        colors : ["#57F6FF", "#5F93FF"],
        iconName : "ios-rainy-outline",
        title : "Fucking drizzle",
        content : "I know, it's boring"
    },
    Rain : {
        colors : ["#00B1FF", "#3933F1"],
        iconName : "ios-rainy",
        title : "raining like a MF",
        content : "For more info look outside"
    },
    Snow : {
        colors : ["#57DFFF", "#B4AAE8"],
        iconName : "ios-snow",
        title : "Freaking cold",
        content : "you wanna make a snowman?"
    },
    Snow : {
        colors : ["#57DFFF", "#B4AAE8"],
        iconName : "ios-snow",
        title : "Freaking cold",
        content : "you wanna make a snowman?"
    },
    Clear : {
        colors : ["#FBF41F", "#FF7000"],
        iconName : "ios-sunny",
        title : "Oh, it's nice weather!",
        content : "Do you have a girlfriend?"
    },
    Mist : {
        colors : ["#00B1FF", "#3933F1"],
        iconName : "ios-cloud-outline",
        title : "I hate haze",
        content : "Not singer haze"
    }
}

function Weather ({temp, weather}) {
    console.log(weather);
    return(
    <LinearGradient colors={weatherCases[weather].colors} style={styles.container}>
        <View style={styles.upper}>
            <Ionicons color="white" size={130} name={weatherCases[weather].iconName}/>
            <Text style={styles.temp}>{temp}℉</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weather].title}</Text>
            <Text style={styles.content}>{weatherCases[weather].content}</Text>
        </View>
    </LinearGradient>

    )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    weather : PropTypes.string.isRequired
}



export default Weather;


const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    upper: {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
    lower : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 35,
        marginBottom : 15,
        color : 'white'
    },
    content : {
        color : 'white',
        fontSize : 18
    },
    temp : {
        color : 'white',
        fontSize : 35
    }
})