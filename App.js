import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "d09ff510b629ca499e31a11f1eacd135";

export default class App extends React.Component {
  state = {
    isLoaded : false,
    error : null,
    temp : null,
    weather : null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition( position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error : error
      })
    }
    )}


    _getWeather = (lat, lon) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
          this.setState({
            temp : json.main.temp,
            weather : json.weather[0].main,
            isLoaded : true
          })
        })
    }


  render() {
    const {isLoaded, error, temp, weather} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
          barStyle="light-content"
        />
        {isLoaded ? <Weather temp={temp} weather={weather}/> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the fucking Weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading : {
    flex: 1,
    backgroundColor : '#D5D18B',
    justifyContent: "flex-end",
    alignItems : "center",
    paddingLeft: 24
  },
  loadingText: {
    fontSize:32,
    marginBottom:100
  },
  errorText : {
    color : "red",
    marginBottom : 20
  }
  
});
