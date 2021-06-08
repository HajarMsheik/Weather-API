import React from "react";

import partlycloudy from "../img/weather-icons/partlycloudy.svg";

import "./Weathernow.css";


class Weathernow extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
            <div className = "app"><img src ={partlycloudy}  alt="partlycloudy"/>
            <div className="text-under"> overcast clouds</div>
            <div className="under-overcast"><b>Temperature  &nbsp; </b> 10<span>&#176;</span> to 11<span>&#176;</span>  C</div>
            <div className="under-temp"> <b>Humidity &nbsp; </b> 78% &nbsp;<b>Pressure</b> &nbsp;10008.48</div>
            </div> 


       );
    }
}
export default Weathernow;