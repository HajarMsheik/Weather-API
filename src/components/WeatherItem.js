import React, { createFactory } from "react";
import "./Weatherfor24.css";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


export default function WeatherItem(props) {
  const time = new Date(props.Timeh).getHours();
    return (
          <div  className="first">  
              <label>  {time }:00           </label>
              <img src ={partlycloudy}  alt="partlycloudy"/>
              <label>  {Math.floor(props.temp- 273.15)}          <span>&#176;</span>C</label>
          </div>
          
    );
}

      
