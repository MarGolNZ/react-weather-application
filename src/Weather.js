import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">

            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" />
                    </div>
                    <div className="col-3">
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                
                </div>

            </form>

            <h1>London</h1>

            <ul>
                <li>Wednesday</li>
                <li>Mostly Cloudy</li>
            </ul>  

            <div className="row">

               <div className="col-6" >
                   <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="mostly cloudy"/>
                    6°C
               </div>

               <div className="col-6">
                   <ul>
                       <li>
                          Precipitation: 15%
                       </li>
                       <li>
                          Humidity: 72% 
                       </li>
                       <li>
                          Wind: 13 hm/h 
                       </li>
                   </ul>
               </div>

            </div>



        </div>
    )
}