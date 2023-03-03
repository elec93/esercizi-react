import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
  state = { count: this.props.value };

  componentDidMount(){
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.amount });
    }, this.props.interval);
  }

  render() {
    return (
      <h1>
        <CounterDisplay count={this.state.count} />
      </h1>
    );
  }
}

export default Counter;
