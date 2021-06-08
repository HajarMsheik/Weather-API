import React from "react";
import "./Weatherfor24.css";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


class Weatherfor24 extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (

     <div className="Photosposition">
            <div className="first">
              <label>03:00</label>
              <img src ={partlycloudy}  alt="partlycloudy"/>
              <label>8<span>&#176;</span>C</label>
            </div>

          <div  className="first">  
          <label>06:00</label>
          <img src ={partlycloudy}  alt="partlycloudy"/>
          <label>9<span>&#176;</span>C</label>
          </div>
          
          <div  className="first">  
          <label>09:00</label>
          <img src ={clear}  alt="sunny"/>
          <label>14<span>&#176;</span>C</label>
          </div>

          <div  className="first">  
          <label>12:00</label>
          <img src ={clear}  alt="sunny"/>
          <label>17<span>&#176;</span>C</label>
          </div>


          <div  className="first">  
          <label>15:00</label>
          <img src ={clear}  alt="sunny"/>
          <label>18<span>&#176;</span>C</label>
          </div>

          <div  className="first">  
          <label>18:00</label>
          <img src ={clear}  alt="sunny"/>
          <label>16<span>&#176;</span>C</label>
          </div>

          <div  className="first">  
          <label>21:00</label>
          <img src ={partlycloudy}  alt="partlycloudy"/>
          <label>13<span>&#176;</span>C</label>
          </div>
          
</div>
 );
}
}
export default Weatherfor24;
      
