import React, { Component } from "react";
import "./ClickCounter.css"

class ClickCounter extends Component {
  state = {
    counter: 0,
  };

  handleIncrementBtn = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div className="upContainer">
        <button onClick={this.handleIncrementBtn}>Up</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default ClickCounter;
