import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
    }

    if (loaded) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
        </div>
    );
    }else{

    const apiKey = "8ea9a418f9dd13e967a728a357801a35";
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return null

    }
}