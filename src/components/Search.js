import React from "react";
import "../components/Search.css";



class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        {this.state.input}
        <input 
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button  id="bbb"
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          Find weather
        </button>
      </div>
    );
  }
}
export default Search;
