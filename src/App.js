import React, { Component } from "react";
import Search from "./components/Search";
import Weathernow from "./components/Weathernow";
import Weatherfor24 from "./components/Weatherfor24";

import fakeWeatherData from "./fakeWeatherData.json";


class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        weather:null ,error:false};
    }

    handleCountryChange = async(country) =>{
      try{ 
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&appid=ad31fe76ffa44e4d13b1f2ab08969dc8`
      );
      const result = await response.json();
      //console.log("result",result);
      if (result.cod == 200) {
        this.setState({ weather: result, error: false });
      } else {
        this.setState({ error: true });
      }
      }
      catch( e){
        console.log(e);
        this.setState({ error: true });
        
      }
    };
    
  async componentDidMount() {
    try{
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=Beirut&cnt=8&appid=ad31fe76ffa44e4d13b1f2ab08969dc8`
      );
      //console.log("response",response);
      const result = await response.json();
      this.setState({ weather: result });
    }
    catch(e){
      console.log(e);
      this.setState({ error: true });
    }

  }

  render() {
    return (
      <div>
       <Search  handleCountryChange={this.handleCountryChange} />
       {this.state.error ? (
          <div>Error</div>
        ) : (
        <main className="app__main">
        {this.state.weather &&
        <>
            <Weathernow 
                minTemp={this.state.weather.list[0].main.temp_min}
                maxTemp={this.state.weather.list[0].main.temp_max}
                humidity={this.state.weather.list[0].main.humidity}
                pressure={this.state.weather.list[0].main.pressure}
                description={
                  this.state.weather.list[0].weather[0].description
                }
            />

            <Weatherfor24 list={this.state.weather.list}   />
        </>
        }
        </main>
        )}
      
         
       </div>
    );
  }
}

export default App;
