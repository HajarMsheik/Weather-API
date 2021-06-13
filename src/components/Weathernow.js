import React from "react";

import partlycloudy from "../img/weather-icons/partlycloudy.svg";

import "./Weathernow.css";


export default function HourlyWeatherItem(props) {
         
  
      return (
            <div className = "app"><img src ={partlycloudy}  alt="partlycloudy"/>
            <div className="text-under"> {props.description}</div>
            <div className="under-overcast"><b>Temperature  &nbsp; </b> {Math.floor(props.minTemp- 273.15)}<span>&#176;</span> to {Math.floor(props.maxTemp- 273.15)}<span>&#176;</span>  C</div>
            <div className="under-temp"> <b>Humidity &nbsp; </b> {props.humidity}% &nbsp;<b>Pressure</b> &nbsp;{props.pressure}</div>
            </div> 


       );
    
}
