import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios"
import axios from "axios";

export default function WeatherForecast(props) {


    function handleResponse(response) {

console.log(response.data)
    }
console.log(props)

    const apiKey = "8ea9a418f9dd13e967a728a357801a35";
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)


    return (
        
        <div className="WeatherForecast">


            <div className="row">



                <div className="col">

                    <div className="WeatherForecast-day">
                        Thu
                    </div>

                    <WeatherIcon code="01d" size={36} />  
                                      
                    <div className="WeatherForecast-tempreratures">

                        <span ClassName="temp-max"> 
                        <strong>
                          19°  
                        </strong>
            
                        </span>

                        <span ClassName="temp-min">

                         10°

                        </span>

                    </div>

                </div>


            </div>







        </div>

    )


}