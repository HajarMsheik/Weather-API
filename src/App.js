import React, { Component } from "react";
import Search from "./components/Search";
import Weathernow from "./components/Weathernow";
import Weatherfor24 from "./components/Weatherfor24";


import fakeWeatherData from "./fakeWeatherData.json";



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
      <div>
       <Search   />

       <Weathernow  />
       <Weatherfor24 />

       </div>
    );
  }
}

export default App;
