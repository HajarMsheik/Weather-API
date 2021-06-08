import React, { Component } from "react";
import Search from "./components/Search";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import partlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear  from "./img/weather-icons/clear.svg"

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "Hajar"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      
      <div >
            <form>
          <input type="text"  id="input-name"
            onChange={event => {
            this.setState({ input: event.target.value });
          }}
          />
        <button  onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >Find weather
          
        </button>
        </form>
      
     
         <div className = "app"><img src ={partlycloudy}  alt="partlycloudy"/>
              <div className="text-under"> overcast clouds</div>
              <div className="under-overcast"><b>Temperature  &nbsp; </b> 10<span>&#176;</span> to 11<span>&#176;</span>  C</div>
              <div className="under-temp"> <b>Humidity &nbsp; </b> 78% &nbsp;<b>Pressure</b> &nbsp;10008.48</div>
          </div> 
          
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
        </div>

 
    
    );
  }
}

export default App;
