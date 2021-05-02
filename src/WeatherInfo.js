import React from "react"
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature"


export default function WeatherInfo(props) {
    return (
        <div ClassName="WeatherInfo">

        <h1>{props.data.city}</h1>

            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>  

            <div className="row mt-3">

               <div className="col-6" >
                   <div className="clearfix">
                       <div class="float-left">
                        <WeatherIcon
                           code={props.data.icon}
                        />
                       </div>
                       
                       <div className="float-left">
                           <WeatherTemperature celsius ={props.data.temperature}
                           />
                       
                       </div>
                    </div>
               </div>

               <div className="col-6">
                   <ul>
                       
                       <li>
                          Humidity: {props.data.humidity}% 
                       </li>
                       <li>
                          Wind: {Math.round(props.data.wind)}km/h 
                       </li>
                   </ul>
               </div>

            </div>

            </div>
    );
}