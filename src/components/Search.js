import React from "react";
import "../components/Search.css";



export default class Search extends React.Component {
  state = {
    countryValue: ""
  };
  handleInputChange = (e)=>{
    const countryValue = e.target.value; // You get access to the field value by using the event.target.value syntax.
    this.setState({countryValue})
  }

  render() {
    return (
      <div   className="SearchContainer">
        {this.state.input}
        <input id="input-name"
        type="text"
        value={this.state.countryValue}
        onChange={this.handleInputChange}
      />
        <button  id="bbb" onClick={()=>this.props.handleCountryChange(this.state.countryValue)}  >                              
        
         Find weather </button>
      </div>
    );
  }
}

