import React from "react";
import "./Weatherfor24.css";
import WeatherItem from "./WeatherItem";

export default function Weatherfor24(props) 
{

  return (

              <div className="Photosposition">
        {props.list.map((item,index)=>{
                if(index>0 && index< 8)
                return < WeatherItem Timeh={item.dt_txt} temp={item.main.temp}  key={index}  />
        }
                )}
      
           
      </div>

    )
}
      
