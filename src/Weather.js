import React from "react";
import "./Weather.css";

export default function Weather() {
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

            <h1>London</h1>

            <ul>
                <li>Wednesday</li>
                <li>Mostly Cloudy</li>
            </ul>  

            <div className="row mt-3">

               <div className="col-6" >
                   <div className="clearfix">
                       <img
                       src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                       alt="mostly cloudy"
                       className="float-left"
                       />
                       <div className="float-left">
                       <span className="temperature">6</span>
                       <span className="unit">°C</span>
                       </div>
                    </div>
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