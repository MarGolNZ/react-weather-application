import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate"
import axios from "axios"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: "#"

        })
        
        
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">

            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                
                </div>

            </form>

            <h1>{weatherData.city}</h1>

            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>  

            <div className="row mt-3">

               <div className="col-6" >
                   <div className="clearfix">
                       <img
                       src={weatherData.iconUrl}
                       alt={weatherData.description}
                       className="float-left"
                       />
                       <div className="float-left">
                       <span className="temperature">{Math.round(weatherData.temperature)}</span>
                       <span className="unit">°C</span>
                       </div>
                    </div>
               </div>

               <div className="col-6">
                   <ul>
                       
                       <li>
                          Humidity: {weatherData.humidity}% 
                       </li>
                       <li>
                          Wind: {Math.round(weatherData.wind)}km/h 
                       </li>
                   </ul>
               </div>

            </div>
        </div>
    )
    } else {
    const apiKey = "8ea9a418f9dd13e967a728a357801a35";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)   
    return"Loading"
    }

    
    
}