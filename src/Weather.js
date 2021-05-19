import React, { useState } from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState({ ready: false })

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon
        })
    }

    function search() {
       const apiKey = "8ea9a418f9dd13e967a728a357801a35";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
       axios.get(apiUrl).then(handleResponse)  
    }

    function handleSubmit(event) {
       event.preventDefault()
       search()
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Enter a city..."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100" >Search</button>
                    </div>
                
                </div>

            </form>

            <WeatherInfo data ={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );
    } else {
        search()
        return (
      <Loader
        className="loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
    }
   
}