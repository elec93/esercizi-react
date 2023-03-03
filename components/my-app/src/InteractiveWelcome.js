import React, { Component } from "react";
import Welcome from "./Welcome";
class InteractiveWelcome extends Component {
  state = {
    name: "",
  };

  handleInput = (event) => {
    const inputValue = event.target.value;
    this.setState({ name: inputValue });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInput}
        ></input>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;
